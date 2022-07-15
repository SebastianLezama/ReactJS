import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main'
import NavBar from '../NavBar/NavBar'

const Layout = () => {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      <NavBar isInHeader={ false }/>
    </div>
  )
}

export default Layout