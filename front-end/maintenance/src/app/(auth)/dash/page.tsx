'use client'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

export default function Dash() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h1>Dash</h1>
      
    </div>
  )
}