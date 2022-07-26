import React, { useState } from 'react';
import style from './NavBar.module.scss';
import { BsGithub, BsCart } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import DropDown from '../Header/DropDown';




function NavBar({ isInHeader }) {

  const [ drop, setDrop ] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const onMouseEnter = () => {
    if(window.innerWidth < 960){setDrop(false)}
      else {setDrop(true)}
  }

  const onMouseLeave = () => {setDrop(false)}
  
  // const navMenu = click ? style.navMenuActive : style.navMenu;

  return (
    <nav className={isInHeader ? style.nav : style.navFooter}>
      <Link className={style.navLinks} to='/'><h2>e-Commerce CDA</h2></Link>
      <ul className={style.navMenu}>
        <li>
          { isInHeader ? <Link exact="true" className={style.cart}
            to="/cart"> <BsCart  color='white' size={35} /> </Link> :  <a target="_blank"
            rel="noreferrer" href='https://www.linkedin.com/in/sebastian-lezama-89a7851b2/' >
            <AiFillLinkedin size={33} /> </a>}
        </li>
        <li className={style.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
          { isInHeader ? 
            <i onClick={handleClick}>
              <Link exact="true" 
                to="/productos"><h2>Productos</h2></Link>
                {drop && <DropDown />}
            </i> : <a target="_blank"
            rel="noreferrer" href='https://github.com/SebastianLezama/'>
            <BsGithub size={30} /> </a>}
        </li>
        
      </ul>
    </nav>
  )
}

export default NavBar;
