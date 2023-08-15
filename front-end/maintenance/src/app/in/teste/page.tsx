'use client'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContext'
import api from '@/service/api'
import { useRouter } from 'next/navigation'

export default function Teste() {
  const { user } = useContext(AuthContext)
  const router = useRouter();
  const { validarToken } = useContext(AuthContext)
  useEffect(() => {
    validarToken();
  }, [])  

  
  async function Cargos(){
    const usuario = await api.get('/cargos').then((res) => {
      console.log(res)
    })  
  }

  function Usuario(){
    console.log(user)
  }

  return (
    <div>
      <h1>Teste Pagina</h1>
      <button onClick={Cargos}>Listar Cargos</button>
      <button onClick={() => router.push('/in/dash')}>Dash</button>
      <button onClick={Usuario}>Usuario</button>
    </div>
  )
}
