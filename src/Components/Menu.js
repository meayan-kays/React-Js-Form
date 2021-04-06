import React from 'react'
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Nav, NavItem, NavLink, Container } from 'reactstrap';

const Menu = (props) => {
    

  return (
    <Container className="menu">
      <Nav pills fill>
        <NavItem>
          <NavLink href="#" >Acceuil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >Smartphones</NavLink>
        </NavItem>        
        <NavItem>
          <NavLink href="#">PC Portables</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Smart TVs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >Imprimantes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" >Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active >Sign Up</NavLink>
        </NavItem>

      </Nav>
    </Container>
  );
}

export default Menu;
