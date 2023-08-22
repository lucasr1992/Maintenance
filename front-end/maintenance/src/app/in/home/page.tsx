'use client'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/context/AuthContext'
import api from '@/service/api'
import { parseCookies } from 'nookies';

export default function Teste() {
  const { permissao } = useContext(AuthContext)
  const { user } = useContext(AuthContext)
  const router = useRouter();
  const { validarToken } = useContext(AuthContext)
  useEffect(() => {
    validarToken();
  }, [])  

  function Permissoes(){
    console.log(permissao)
  }
  

  return (
    <div>
      <ToastContainer />
      <h1>Home</h1>
      <button onClick={Permissoes}>Pagina</button>
    </div>
  )
}
