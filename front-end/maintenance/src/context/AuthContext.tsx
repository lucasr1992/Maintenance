import {  createContext, useState, ReactNode, useEffect } from "react";
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
  sigIn: (data: SignInData ) => Promise<void>;
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
    try{
      const usuario = await api.post('/auth', data)
      setCookie(undefined, 'maintenance.token', usuario.data.token, {
        maxAge: 60 * 30 
      }) 
      api.defaults.headers.Bearer = `${usuario.data.token}`;
      setUser(usuario.data)
      router.push('/in/teste')
    }catch(error: any){
      const msg = error.response.data.error
      return msg
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, sigIn, validarToken }}>
      {children}
    </AuthContext.Provider>
  )
}