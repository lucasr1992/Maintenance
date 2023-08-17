import { ReactNode, useState } from "react"
import { useRouter } from 'next/navigation'
import { AiFillCodeSandboxCircle, AiOutlineLeft } from "react-icons/ai"
import { SidebarData } from '@/components/Sidebar2/ItenList/List';
import { Container, Button, Logo, Divider, Content, Link, Icon, Label} from './Styled'

interface CloseProps{
  onClose: () => void
} 

interface ListProps{
  item:{
    id: number
    title: string
    path: string
    icon: ReactNode
    notificatio: number
    visible?: boolean
  }
}

export default function ContantSidebar(item: ListProps, ){
  const [isOpen, setIsOpen] = useState(false)
  const showBar = () => setIsOpen(!isOpen);
  const [pageOn, setPageOn] = useState(0)

  const route = useRouter()
   
  function goPage(path:string, id: number){
    setPageOn(id)
    route.push(path)
  }

  return(
    <Container isOpen={isOpen}>
      <Button isOpen={isOpen} onClick={showBar}><AiOutlineLeft /></Button>
      <Logo isOpen={isOpen}><AiFillCodeSandboxCircle /><h1 className="titulo-logo">PROTOTIPO</h1></Logo>
      <Divider isOpen={isOpen}/>
      {SidebarData.map((item: any, index) => {
        return(
          <>
            { item.visible && <Content isOpen={isOpen} isActive={item.id === pageOn? true : false}>
              <Link onClick={() => goPage(item.path, item.id) }>
                <Icon isOpen={isOpen} isActive={item.id === pageOn? true : false}>
                  {item.icon}
                  <Label isOpen={isOpen}>{item.title}</Label>
                </Icon>                
              </Link>
            </Content> }
          </>
        ) 
      })}
    </Container>
  )
}