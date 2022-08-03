import React, { useContext, useEffect, useState } from 'react';
import style from './NavBar.module.css';
import { BsGithub, BsCart } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import DropDown from '../Header/DropDown';
import { FaBars, FaTimes } from 'react-icons/fa'
import { CartContext } from '../../context/CartContext';
// import FavDrop from '../Header/FavDrop';


function NavBar({ isInHeader }) {
  const { cartItems } = useContext(CartContext);

  const [ drop, setDrop ] = useState(false);
  const [ dropFav, setDropFav ] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [ icon, setIcon ] = useState(false);


  const onMouseEnter = () => {
    if(window.innerWidth < 960){setDrop(false)}
      else {setDrop(true)}
  }
  const onMouseLeave = () => {setDrop(false)}
  
  const onEnter = () => {
    if(window.innerWidth < 960){setDropFav(false)}
      else {setDropFav(true)}
  }
  const onLeave = () => {setDropFav(false)}

  // useEffect(() => {
  //   if(window.innerWidth < 960){
  //     setIcon(true)
  //   } else setIcon(false)
  // }, [window.innerWidth])
  
  const ShowIcon = () => {
      return (
          <div className={style.bars}>
            {click ? 
            <FaTimes size={30} onClick={closeMobileMenu} /> 
              :
            <FaBars size={30} onClick={handleClick} />}
          </div>
        )
  }
  
  const Favoritos = () => {
    return (
      <li className={click ? style.navLinksMobile : style.navItem}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={closeMobileMenu}
      >
        <Link to='/favs'>
          <div className={style.navFav}>
            <h2>Favoritos</h2>
            {/* {dropFav && <FavDrop />} */}
          </div>
        </Link>
      </li>
    )
  }

  return (
    <nav className={isInHeader ? style.nav : style.navFooter}>
      <Link className={style.navLinks} to='/'><h2>e-Commerce CDA</h2></Link>
      <ShowIcon className={style.menuIcon} />
      <ul className={click ? style.navMenuActive : style.navMenu}>
        {isInHeader && <Favoritos />}
        <li className={click ? style.navLinksMobile : style.navItem}
          to='/cart'
        >
          { isInHeader ?
            <Link 
              exact="true" 
              to="/cart" 
            > 
              <div className={style.cart} onClick={closeMobileMenu}>
                <BsCart  color='white' size={35} />
                <span>{cartItems}</span>
              </div>
            </Link>
            : <a className={style.linkedIn} 
                  target="_blank"
                  rel="noreferrer" 
                  href='https://www.linkedin.com/in/sebastian-lezama-89a7851b2/' 
                >
                <AiFillLinkedin  size={40} />
              </a>}
        </li>
        <li className={click ? style.navLinksMobile : style.navItem}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
          { isInHeader ? 
            <div
              className={style.navProd}
              onClick={closeMobileMenu}
            >
              <Link to='productos' className={style.productos} >
                <h2>Productos</h2>
              </Link> 
                {drop && <DropDown />}
            </div>
            : <a className={style.github} target="_blank"
                rel="noreferrer" href='https://github.com/SebastianLezama/'
              >
                <BsGithub size={35} /> 
              </a>
              }
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
