import React, { useContext } from 'react'
import Form from './Form'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'



const Cart = () => {
  const { cart, clearCart, deleteItem, addToCart } = useContext(CartContext);

  if (cart.length === 0){return(<div><h2>No hay productos</h2></div>)}

  return (
    <Form />
  )
}

export default Cart
