import styled, { css } from "styled-components";

import { styleV } from '@/styles/StyleVariavel';

interface SideBarProps{
  isOpen?: boolean;
  isActive?: boolean;
}


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media  screen and (max-width: 525px){
    display: none;
  }
`;

export const Mode = styled.div<SideBarProps>`
  width: ${SideBarProps => SideBarProps.isOpen ? '300px' : '30px'};
  min-height: 100vh;
  background: ${styleV.sidBarColorDark};
  padding: 24px;
  position: relative;  
`;

export const ButtonSideBar = styled.button<SideBarProps>`
  box-shadow: 0 0 4px ${styleV.shadowDark}, 0 0 7px ${styleV.shadow2Dark};
  position: absolute;
  top: 48px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #dfdfdf;
  right: ${SideBarProps => SideBarProps.isOpen ? '-15px' : '-15px'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${SideBarProps => SideBarProps.isOpen ? 'initial' :'rotate(180deg)'};
  .openButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }   
`;

export const Logo = styled.div<SideBarProps>`
  width: 100%;
  .imgLogo{
    display: flex;
    margin-left: ${SideBarProps => SideBarProps.isOpen ?  'none' : '-15px'};
    width: ${SideBarProps => SideBarProps.isOpen ?  'none' : '50px'};
    height: ${SideBarProps => SideBarProps.isOpen ?  'none' : '50px'};
    font-size: 4rem;
    color: #DDDD;
    align-items: center;
    .titulo-logo{
      font-size: 2rem;
      margin-left: 8px;
      display: ${SideBarProps => SideBarProps.isOpen ?  {} : 'none'};
    }
  }
  cursor: pointer;
  margin-bottom: 24px;
`;

export const DividerLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${styleV.dividerLineDark};
  margin: 30px 0;  
`;

export const Lista = styled.ul<SideBarProps>`
  background:  ${SideBarProps => SideBarProps.isActive ?  'transparent' : styleV.shadowDark };
  border-radius: 6px;
  margin-left: ${SideBarProps => SideBarProps.isOpen ?  '0px' : '-10px' };
  width: ${SideBarProps => SideBarProps.isOpen ? '100%' : '160%' };
  display: flex;
  justify-content: left;
  padding: 4px 0px;
  align-items: center;   
`;


