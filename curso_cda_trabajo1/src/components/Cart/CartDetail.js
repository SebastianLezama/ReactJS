import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';
import './Cart.scss'


const CartDetail = ({prod}) => {
  const { cart, deleteItem, addToCart } = useContext(CartContext);

  return (
    <div className='containerCartDetail'>
      <div className='infoCartDetail'>
        <img src={prod.img} alt={prod.name} />
        <article>
          <h3>{prod.name}</h3>
          <div className='subtotal'>
            <Counter item={prod} />
            <button className='boton'>-</button>
            <h4>{prod.quantity} </h4>
            <button className='boton'>+</button>
            <h4> * $ {prod.price}</h4>
            <h4>= ${prod.price * prod.quantity}.-</h4>
          </div>
        </article>
        <button
            className='botonDelete'
            onClick={() => deleteItem(prod.id)}
        >
            Eliminar
        </button>
      </div>
        </div>
  )
}

export default CartDetail