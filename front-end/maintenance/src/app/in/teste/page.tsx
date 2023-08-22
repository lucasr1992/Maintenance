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


  async function Cargos(){
    const { 'maintenance.token': token } = parseCookies();
    api.defaults.headers.Bearer = `${token}`;
    const id = toast.loading("Validando Dados")
    try{
      const usuario = await api.get('/cargos').then((res) => {
        console.log(res)
      })  
      toast.dismiss(id)
    }catch(error:any){
      const msg = error.response.data.error
      toast.update(id, {render: msg, type: "error", isLoading: false, autoClose:30*100 });
    } 
  }

  const paginaDash = () =>{
    router.push('/in/dash')
    const id = toast.loading("Aguarde")
  }

  const toastShow = () => toast.success("Cadastro realizado")

  function Usuario(){
    console.log(user)
  }

  return (
    <div>
      <ToastContainer />
      <h1>Teste Pagina</h1>
      <button onClick={Cargos}>Listar Cargos</button>
      <button onClick={paginaDash}>Dash</button>
      <button onClick={Usuario}>Usuario</button>
      <button onClick={toastShow}>Toast</button>
    </div>
  )
}
