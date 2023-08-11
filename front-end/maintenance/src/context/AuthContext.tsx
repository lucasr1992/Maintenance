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
  sigIn: (data: SignInData ) => Promise<void>
}

interface AuthProps{
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children } : AuthProps ){
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'maintenance.token': token } = parseCookies();
    if(token){
      validation(token)
    }else{
      router.push('/')
    }
    
  }, [])

  async function validation(toke: string) {
    const toki = JSON.parse(`{"token":"${toke}"}`)
    try{
      const usuario = await api.post('/validation', toki).then((res) => {
        setUser(res.data)
      })  
    }catch(error){
      destroyCookie(null, 'maintenance.token')
      router.push('/')
    }
    
  }

  async function sigIn(data: SignInData){
    try{
      const usuario = await api.post('/auth', data)
      setCookie(undefined, 'maintenance.token', usuario.data.token, {
        maxAge: 60 * 60 * 1
      }) 

      

      api.defaults.headers.Bearer = `${usuario.data.token}`;
      setUser(usuario.data)
      router.push('/teste')

    }catch(error: any){
      const msg = error.response.data.error
      return msg
    }
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, sigIn }}>
      {children}
    </AuthContext.Provider>
  )
}