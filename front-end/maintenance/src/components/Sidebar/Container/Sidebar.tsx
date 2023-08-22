import { ReactNode, useState, useContext, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { AiFillCodeSandboxCircle, AiOutlineLeft } from "react-icons/ai"
import { SidebarData } from '@/components/Sidebar/ItenList/List';
import { Container, Button, Logo, Divider, Content, Link, Icon, Label} from './Styled'
import { AuthContext } from '@/context/AuthContext' 


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

export default function ContantSidebar(){
  const { permissao } = useContext(AuthContext)
  const [listaData, setListData] = useState(SidebarData)  
  const [isOpen, setIsOpen] = useState(false)
  const [pageOn, setPageOn] = useState(1)

  const showBar = () => setIsOpen(!isOpen);
  const route = useRouter()

  useEffect(() => {
    controleAcesso()
  }, [])
   
  function goPage(path:string, id: number){
    setPageOn(id)
    route.push(path)
  }



  function controleAcesso(){
    for(var i = 0; i < permissao.length; i++){
      if(permissao[i].leitura === true){
        let id_pag = listaData.find((item) => item.title === permissao[i].paginas.title)?.id;
        listaData[id_pag || 0].visible=true;
            
      }
      setListData(listaData);       
    }    
  }

  return(
    <Container isOpen={isOpen}>
      <Button isOpen={isOpen} onClick={showBar}><AiOutlineLeft /></Button>
      <Logo isOpen={isOpen}><AiFillCodeSandboxCircle /><h1 className="titulo-logo">PROTOTIPO</h1></Logo>
      <Divider isOpen={isOpen}/>
      {listaData.map((item: any, index) => {
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