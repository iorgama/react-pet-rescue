import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Nav, MenuIcon, NavbarContainer, NavLogo, NavIcon, Logo, Menu, MenuItem, MenuLink } from './style'

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>
            <Logo />
          </NavIcon>
          PetRescue
        </NavLogo>
        <MenuIcon onClick={handleClick}>
            {click ? <BiX/> : <BiMenu/>}
        </MenuIcon>
        <Menu onClick={handleClick} click={click}>
          <MenuItem>
              <MenuLink to="/"> Home </MenuLink>
          </MenuItem>   
          <MenuItem>
              <MenuLink to="/sobre"> Sobre </MenuLink>
          </MenuItem>   
          <MenuItem>
              <MenuLink to="/lista-pets"> Listar Pets </MenuLink>
          </MenuItem>             
          <MenuItem>
              <MenuLink to="/cadastra-pets"> Cadastrar </MenuLink>
          </MenuItem>          
        </Menu>
      </NavbarContainer>
    </Nav>
  )
}
