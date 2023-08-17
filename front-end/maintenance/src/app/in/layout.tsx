'use client'
import { ReactNode } from 'react';

import Sidebar from '@/components/Sidebar2/Layout/Sidebar';

interface AuthLayouteProps{
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayouteProps){
  return(
    <Sidebar>
        {children}
    </Sidebar>
  )
}