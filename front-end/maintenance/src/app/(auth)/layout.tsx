'use client'
import { ReactNode } from 'react'

interface AuthLayouteProps{
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayouteProps){
  return(
    <div>
      {children}
    </div>
  )
}