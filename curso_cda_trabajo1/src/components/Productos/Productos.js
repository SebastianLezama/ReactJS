import React from 'react'
import Counter from '../Counter/Counter'
import CardContainer from './Cards/CardContainer'
import './Productos.css'


const Productos = () => {
  return (
    <div className='productos'>
      <CardContainer />
      <Counter stock="10"/>
      <Counter stock="6"/>
    </div>
  )
}

export default Productos