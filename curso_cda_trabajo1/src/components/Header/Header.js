import React from 'react'
import NavBar from '../NavBar/NavBar'
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <NavBar isInHeader={ true }/>
    </header>
  )
}

export default Header
