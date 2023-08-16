'use client'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const { sigIn } = useContext(AuthContext)

  const logIn = async() =>{
    const registro = document.getElementById('registro') as HTMLInputElement;
    const reg = registro.value
    const senha = document.getElementById('senha') as HTMLInputElement;
    const sen = senha.value
    const usuario = JSON.parse(`{"registro_usuario":"${reg}", "senha_usuario":"${sen}"}`)
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
    await sigIn(usuario)
  }

  return (
    <div>
      <ToastContainer autoClose={30 * 100} closeButton={true} theme='colored' />
      
      <label>Registro: </label>
      <input name='registro' id='registro'/>
      <br/>
      <label>Senha: </label>
      <input name='senha' id='senha'/>
      <button onClick={logIn}>Entrar</button>
    </div>
  )
}
