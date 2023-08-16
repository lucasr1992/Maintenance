import { ReactNode, useState } from "react";
import { AiOutlineLeft, AiOutlineSearch } from 'react-icons/ai'
import { GiTechnoHeart } from 'react-icons/gi'
import { AiFillCodeSandboxCircle } from 'react-icons/ai'
import { SidebarData } from '@/components/ItensSidbar/List'

import { Container, Mode, ButtonSideBar, Logo, DividerLine, Lista } from './Styled';
import Dropdown from "../DopdownListSidebar/Dropdown";

interface CloseProps{
  onClose: () => void
} 

interface ListProps{
  item:{
    id: number
    title: string
    path: string
    icon: ReactNode | null
    notificatio: number
    visible?: boolean
  }
}

export default function ContentSidebar({onClose} : CloseProps, props:ListProps){
  const [sidebarOpen, SetSidebarOpen] = useState(false);
  const [paginaOn, setPaginaOn] = useState(0)
  
  function setPage(id: number){
    setPaginaOn(id)
  }

  function CloseMenu(){
    onClose()
  }

  
  return(
    <Container>
      <Mode  isOpen={sidebarOpen}>
        <ButtonSideBar isOpen={sidebarOpen} onClick={() => 
          {SetSidebarOpen((sidebarOpen) => !sidebarOpen)
          }}>
            <div className="openButton" onClick={CloseMenu}>
              <AiOutlineLeft />
            </div>
        </ButtonSideBar>
        <Logo isOpen={sidebarOpen}>        
          <div className="imgLogo"><AiFillCodeSandboxCircle /><h1 className="titulo-logo">PROTOTIPO</h1></div>
        </Logo>
        <DividerLine/>
        {SidebarData.map((item : any, index) => {
          return(
            
              <Lista isOpen={sidebarOpen} className="pagina" onClick={() => setPage(item.id)} >
              
                <Dropdown item={item} key={index} isOpen={sidebarOpen}/>
                
              </Lista>
            
          )
        })}
          
      </Mode>
    </Container>
  )

}