import styled from "styled-components";
import { useRouter } from 'next/navigation'
import { styleV } from '@/styles/StyleVariavel';


interface SideBarProps{
  isOpen?: boolean;
  isActive?: boolean;
  isVisible?:boolean;
}

export const Conteiner = styled.div`
  width: 100%;
`;

export const LinkContainer = styled.div<SideBarProps>`
  background:  ${SideBarProps => SideBarProps.isActive ?  styleV.sidBarColorDark : 'transparent'};
  display: ${SideBarProps => SideBarProps.isVisible ? {} : 'none'};
  border-radius: 6px;
  .dropdown{
    padding: 0;
    width:100%;
    list-style: none;
    text-align: start;
    background: inset 0 0 0 1px ${styleV.shadow2Dark};
    border-radius: 0px 0px 4px 4px;
    display: flex;
    width: 100%;
    
    :hover{
      color:${styleV.dividerLineDark};
      svg{
        color:${styleV.dividerLineDark};
      }
    }
  }  
`;

export const Link = styled.div<SideBarProps>`
  display: flex;
  text-decoration: none;
  font-size: 16px;
  padding: 2px 3px;
  width: 100%;
  cursor: pointer;
 
`;

export const Icon = styled.div<SideBarProps>`
  padding: 0px;
  color: ${styleV.iconDark};
  font-size: 1.8rem;
  margin-left: 7px;
  margin-top: 4px;
`;

export const Label = styled.span<SideBarProps>`
  display: block;
  flex: 1;
  margin-left: 8px;
  margin-top: 8px;
  text-decoration: none;
  color: ${styleV.iconDark};
  display: ${SideBarProps => SideBarProps.isOpen ? {} : 'none'};
  font-weight: 800;
`;

export const Notification = styled.div<SideBarProps>`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0px;
  border-radius: 3px;
  background: yellow;
  color: black;
  font-weight: 900; 
  border: 1px double grey;
  display: ${props => props.isOpen ? {} : 'none'};
  padding: 0px 4px;
  height: 22px;
  margin-top: 26px;
  margin-left: 17.5rem;  
`;