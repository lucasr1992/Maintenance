'use client'
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { sigIn } = useContext(AuthContext)

  const logIn = async() =>{
    const registro = document.getElementById('registro') as HTMLInputElement;
    const reg = registro.value
    const senha = document.getElementById('senha') as HTMLInputElement;
    const sen = senha.value
    const usuario = JSON.parse(`{"registro_usuario":"${reg}", "senha_usuario":"${sen}"}`)
    
    await sigIn(usuario)

  }

  return (
    <div>
      <label>Registro: </label>
      <input name='registro' id='registro'/>
      <br/>
      <label>Senha: </label>
      <input name='senha' id='senha'/>
      <button onClick={logIn}>Entrar</button>
    </div>
  )
}
