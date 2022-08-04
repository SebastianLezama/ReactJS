import './Cart.scss'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  const { responseId } = useParams()
  return (
    <div>
      Gracias por tu compra, este es tu código para que puedas seguir el envío:{' '}
      {responseId}
    </div>
  )
}

export default Checkout
