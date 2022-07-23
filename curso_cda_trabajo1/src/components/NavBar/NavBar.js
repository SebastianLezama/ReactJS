import React, { useState } from 'react';
import style from './NavBar.module.scss';
import { BsGithub, BsCart } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, Collapse, NavbarToggler, Navbar, Nav, UncontrolledDropdown } from 'reactstrap';
import DropDown from '../Header/DropDown';




function NavBar({ isInHeader }) {

  return (
    <nav className={isInHeader ? style.nav : style.navFooter}>
      <Link className='home' to='/'><h2>e-Commerce CDA</h2></Link>
      <ul>
        <DropDown>Categorias</DropDown>
        <li>
          { isInHeader ? <Link exact="true" className="productos" 
            to="/productos">Productos</Link> : <a target="_blank"
            rel="noreferrer" href='https://github.com/SebastianLezama/'>
            <BsGithub size={30} /> </a>}
        </li>
        <li>
          { isInHeader ? <Link exact="true" className="cart" 
            to="/cart"> <BsCart size={30} /> </Link> :  <a target="_blank"
            rel="noreferrer" href='https://www.linkedin.com/in/sebastian-lezama-89a7851b2/' >
            <AiFillLinkedin size={33} /> </a>}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
