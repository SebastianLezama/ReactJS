import React, { useContext, useEffect, useState } from 'react';
import style from './NavBar.module.css';
import { BsGithub, BsCart } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import DropDown from '../Header/DropDown';
import { FaBars, FaTimes } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext';


function NavBar({ isInHeader }) {
  const { cartItems } = useContext(CartContext);

  const [ drop, setDrop ] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [ icon, setIcon ] = useState(false);


  const onMouseEnter = () => {
    if(window.innerWidth < 960){setDrop(false)}
      else {setDrop(true)}
  }
  const onMouseLeave = () => {setDrop(false)}


  useEffect(() => {
    if(window.innerWidth < 960){
      setIcon(true)
    } else setIcon(false)

  }, [window.innerWidth])
  
  const ShowIcon = () => {
      return (
        click ? <FaTimes onClick={closeMobileMenu}/> : <FaBars />
        )
  }
  
  const bars = icon ? <ShowIcon /> : 'Productos';
  // const navMenu = click ? style.navMenuActive : style.navMenu;

  return (
    <nav className={isInHeader ? style.nav : style.navFooter}>
      <Link className={style.navLinks} to='/'><h2>e-Commerce CDA</h2></Link>
      <ul className={style.navMenu}>
        <li className={style.navItem}>
          { isInHeader ? <Link exact="true" to="/cart" className={style.cart}> 
            <BsCart  color='white' size={35} /> <span>{cartItems}</span></Link> :  <a className={style.linkedIn} target="_blank"
            rel="noreferrer" href='https://www.linkedin.com/in/sebastian-lezama-89a7851b2/' >
            <AiFillLinkedin  size={40} /> </a>}
        </li>
        <li className={style.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
          { isInHeader ? 
            <h2 onClick={handleClick} className={style.productos}>
              <Link exact="true" 
                to="/productos" className={style.navProd}><h2>{bars}</h2></Link>
                {drop && <DropDown />}
                
            </h2> : <a className={style.github} target="_blank"
              rel="noreferrer" href='https://github.com/SebastianLezama/'>
              <BsGithub size={35} /> </a>}
        </li>
        
      </ul>
    </nav>
  )
}

export default NavBar;
