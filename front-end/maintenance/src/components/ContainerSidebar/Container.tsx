import { HTMLAttributes, ReactNode, useState } from "react";

import { Layout, Main } from './Styled';
import ContentSidebar from '@/components/ContentSidebar/Content'

interface MyProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
}

export default function ContainerSidebar(props: MyProps){
  const [isOpen, setIsOpen] = useState(false)
  const showBar = () => setIsOpen(!isOpen);

  return(
    <Layout>
      <ContentSidebar onClose={() => showBar}/>
      <div className="sidebar">
        <Main>{props.children}</Main>
      </div>
    </Layout>
  )

}