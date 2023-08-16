import { ReactNode, useEffect } from "react"
import { useRouter } from 'next/navigation'

import { Conteiner, LinkContainer, Link, Icon, Label, Notification } from './Styled'

interface ListProps{
  item :{
    id: number,
    title: string,
    path: string ,
    icon: ReactNode | null,
    notificatio: number,
    visible?: boolean
  }  
  isOpen: boolean
}

export default function Dropdown({item, isOpen} : ListProps){
  const router = useRouter();

  function changePage(path:string){   
    router.push(path)
  }

  return(
    <Conteiner>
      <LinkContainer isOpen={isOpen} isVisible={item.visible}>
      <ul className="dropdown" >
        <Link onClick={() => changePage(item.path)}>  
          <Icon isOpen={isOpen}>{item.icon}</Icon> 
              {/* { !item.visible && <Label>{item.title}</Label>} */}
              {isOpen && <Label isOpen={isOpen}>{item.title}</Label>}
              {isOpen && item.notificatio && <Notification isOpen={isOpen}>{item.notificatio}</Notification> }              
        </Link>        
        </ul>        
      </LinkContainer>
    </Conteiner>
  )
}