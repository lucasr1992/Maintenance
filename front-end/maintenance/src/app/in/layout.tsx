'use client'
import { ReactNode } from 'react';

import ContainerSidebar from '@/components/ContainerSidebar/Container';

interface AuthLayouteProps{
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayouteProps){
  return(
    <div>
      <ContainerSidebar>
        {children}
      </ContainerSidebar>
    </div>
  )
}