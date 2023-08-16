'use client'
import { useContext, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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

  const paginaTeste = () =>{
    router.push('/in/teste')
    const id = toast.loading("Aguarde")
  }
  
  return (
    <div>
      <ToastContainer />
      <h1>Dash</h1>
      <button onClick={paginaTeste}>Teste</button>
      <button onClick={Usuario}>Usuario</button>
    </div>
  )
}