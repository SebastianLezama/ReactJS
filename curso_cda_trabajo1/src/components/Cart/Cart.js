import React, { useContext } from 'react'
import Form from './Form'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'



const Cart = () => {
  const { cart, clearCart, deleteItem, addToCart } = useContext(CartContext);

  if (cart.length === 0){return(<div><h2>No hay productos</h2></div>)}

  return (
    <div className='cart-container'>
      {cart.map((p) => (
        <CartDetail key={p.id} prod={p}/>
      ))}
    </div>
  )
}

export default Cart
