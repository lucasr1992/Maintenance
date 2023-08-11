'use client'
import { useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from "next";
import { AuthContext } from '@/context/AuthContext'
import api from '@/service/api'


export default function Teste() {
  const { user } = useContext(AuthContext)
  

  async function Cargos(){
    const usuario = await api.get('/cargos').then((res) => {
      console.log(res)
    })  
  }

  

  return (
    <div>
      <h1>Teste Pagina</h1>
      <button onClick={Cargos}>Listar Cargos</button>
    </div>
  )
}
