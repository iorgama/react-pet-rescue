import { Link } from "react-router-dom";
import styled, { StyledProps } from "styled-components";
import { Container } from "../../GlobalStyles/globalStyle";
import logo from '../../assets/images/logo.png'

export const Nav = styled.nav` 
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 80px;
  background-color: ${props => props.theme.palette.tertiary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: ${props => props.theme.palette.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.3rem;
  font-weight: 800;
  transition: all .5s ease;
  &:hover{
      transform: scale(1.10);
  }
`;

export const NavIcon =  styled.div`
  width: 70px;
  height: 45px;
`
export const Logo = styled.img.attrs({
  src: logo
})`
  height: 100%;
  width: 100%;  
`

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
      display: block;
      position: absolute;
      color: ${props => props.theme.palette.primary};
      top: 0;
      right: 0;
      transform: translate(-50%, 20%);
      font-size: 4rem;
      cursor: pointer;
  }
`;


type Props = StyledProps<{
  click ?: boolean;
}>
export const Menu = styled.ul<Props>`
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width:1000px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 80px;
      left: ${({click}) => click ? '0' : '-100%'};
      background-color: ${props => props.theme.palette.secondary};
      transition: all .5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${props => props.theme.palette.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all .2s ease;

  &:hover {
      color: ${props => props.theme.palette.secondary};
      transform: traslateY(-3rem);
  }
  &:active {
      transform: traslateY(3rem);
      color: ${props => props.theme.palette.secondary};
  }

  @media only screen and (max-width:1000px) {
    &:hover, &:active {
      color: ${props => props.theme.palette.light};
    }
  }

`;