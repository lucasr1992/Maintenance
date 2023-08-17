import { ReactNode } from 'react';
import { Container, Page } from './Styled';
import ContantSidebar from '../Container/Sidebar';

interface PageProps{
  children: ReactNode
}

export default function Sidebar({children} : PageProps){
  
  return(
    <Container>
      <ContantSidebar/>
      <Page>{children}</Page>
    </Container>
  )
}