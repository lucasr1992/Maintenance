'use client'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '@/context/AuthContext'
import api from '@/service/api'
import { parseCookies } from 'nookies';

export default function Teste() {
  const { user } = useContext(AuthContext)
  const router = useRouter();
  const { validarToken } = useContext(AuthContext)
  useEffect(() => {
    validarToken();
  }, [])  


  

  return (
    <div>
      <ToastContainer />
      <h1>Atender Molde</h1>
      
    </div>
  )
}
