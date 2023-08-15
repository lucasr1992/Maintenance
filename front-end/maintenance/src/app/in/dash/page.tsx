'use client'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function Dash() {
  const { user } = useContext(AuthContext)
  const router = useRouter();
  const { validarToken } = useContext(AuthContext)
  useEffect(() => {
    validarToken();
  }, [])  

  function Usuario(){
    console.log(user)
  }
  
  return (
    <div>
      <h1>Dash</h1>
      <button onClick={() => router.push('/in/teste')}>Teste</button>
      <button onClick={Usuario}>Usuario</button>
    </div>
  )
}