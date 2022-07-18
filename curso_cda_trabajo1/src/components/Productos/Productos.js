import React from 'react'
import Counter from '../Counter/Counter'
import CardContainer from './CardContainer'


const Productos = () => {
  return (
    <>
    <CardContainer />
    <Counter stock="10"/>
    <Counter stock="6"/>
    </>
  )
}

export default Productos