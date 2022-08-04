import React, { useContext } from 'react'
import './Cart.scss'
import { CartContext } from '../../context/CartContext'
import CartDetail from './CartDetail'
import Form from './Form'

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div>
        <h2>No hay productos</h2>
      </div>
    )
  }

  const Subtotal = () => {
    return cart.map((item) => (
      <div>
        <h5>
          {item.name} ${item.price * item.quantity}
        </h5>
      </div>
    ))
  }

  return (
    <div className="cartDisplay">
      <div className="cartContainer">
        {cart.map((p) => (
          <CartDetail key={p.id} prod={p} />
        ))}
      </div>
      <div className="cartTotalContainer">
        <Form totalPrice={total} cart={cart} clearCart={clearCart} />
        <ul>
          <li>
            <button className="vaciar" onClick={clearCart}>
              Vaciar carrito
            </button>
          </li>
          <li>
            <Subtotal />
          </li>
          <li>
            <h2>Total: ${total}</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cart
