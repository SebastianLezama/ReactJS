import React, { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'



const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0){return(<div><h2>No hay productos</h2></div>)}

  return (
  <div className='cartDisplay'>
    <div className='cartContainer'>
      {cart.map((p) => (
        <CartDetail key={p.id} prod={p}/>
      ))}
    </div>
    <div className='cartTotalContainer'>
      <button className='vaciar' onClick={clearCart}>
        Vaciar carrito
      </button>
      <h2>Total: ${total}</h2>
    </div>
  </div>
  )
}

export default Cart
