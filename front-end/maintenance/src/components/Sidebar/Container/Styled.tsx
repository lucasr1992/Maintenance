import { styled} from "styled-components";

interface StyleProps{
  isOpen:boolean
  isActive?: boolean
}


export const Container = styled.div<StyleProps>`
  background-color: black;
  width: ${StyleProps => StyleProps.isOpen ? '320px' : '90px'};
  min-height: 100vh;
  position: relative; 
  padding: 10px;
  @media  screen and (max-width: 525px){
    display: none;
  }
`

export const Button = styled.div<StyleProps>`
  top: 10px;
  left: ${StyleProps => StyleProps.isOpen ? '245px' : '85px'};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: -2px 2px 5px white, 3px -2px 5px black ;
  background-color: #dddddd;
  position: absolute;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    transform: ${StyleProps => StyleProps.isOpen ? 'initial' :'rotate(180deg)'};
  }
`

export const Logo = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dddddd;
  h1{
    display: ${StyleProps => StyleProps.isOpen ? {} : 'none'};
    font-size: 28px;
  }  
  svg{
    margin-left: 5px;
    margin-right: 5px;
    font-size: 3.2rem;
    margin-top: ${StyleProps => StyleProps.isOpen ? {} : '10px'};
  }
`

export const Divider = styled.div<StyleProps>`
  margin-top: ${StyleProps => StyleProps.isOpen ? '10px' : '20px'};
  height: 1px;
  background-color: #dddddd;
`

export const Content = styled.div<StyleProps>`
  background-color: ${StyleProps => StyleProps.isActive ? '#dddddd' : 'transparent'};
  border: 1px solid transparent;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 6px;  
  &:hover{
    border: 1px solid #dddddd ;
  }
  
`
export const Link = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 6px; 
  cursor: pointer;
  
`
export const Icon = styled.div<StyleProps>`
  display: flex;
  padding: 4px;
  justify-content: ${StyleProps => StyleProps.isOpen ? 'left' : 'center'} ;
  align-items: center;
  color: ${StyleProps => StyleProps.isActive ? 'black' : 'gray'};
  svg{
    margin-left: 7px;
    margin-right: 10px;
    font-size: 2rem;
  }
`

export const Label = styled.div<StyleProps>`
  display: ${StyleProps => StyleProps.isOpen ?  {} : 'none'};  
`