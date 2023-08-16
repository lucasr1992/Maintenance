import {  createContext, useState, ReactNode, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

import api from "@/service/api";

interface User{
  token: string
  cargo: number
  setor: number
}

interface SignInData{
  registro_usuario: string
  senha_usuario: string
}

interface AuthContextProps{
  isAuthenticated: boolean;
  user: User | null;
  sigIn: (data: SignInData ) => Promise<any>;
  validarToken: () => void
}

interface AuthProps{
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children } : AuthProps ){
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;

  async function validarToken(){
    const { 'maintenance.token': token } = parseCookies();
    api.defaults.headers.Bearer = `${token}`;
    const validToken = JSON.parse(`{"token":"${token}"}`) 
    if(!token){     
      router.push('/')
    }else{
      try{
        const usuario = await api.post('/validation', validToken ).then((res) => {
          setUser(res.data)
        })
      }catch(error){
        router.push('/')
      }
    }
  }

  async function sigIn(data: SignInData){
    const id = toast.loading("Validando Dados")
    try{
      const usuario = await api.post('/auth', data)
      setCookie(undefined, 'maintenance.token', usuario.data.token, {
        maxAge: 60 * 30 
      }) 
      api.defaults.headers.Bearer = `${usuario.data.token}`;
      setUser(usuario.data)
      router.push('/in/teste')
    }catch(error: any){
      const msg = error.response
      return toast.update(id, {render: msg, type: "error", isLoading: false });
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, sigIn, validarToken }}>
      {children}
    </AuthContext.Provider>
  )
}