import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import Counter from '../Counter/Counter';
import CardDetail from '../Productos/Cards/CardDetail';
import './Cart.scss'


const CartDetail = ({prod}) => {
  const { cart, setCart, deleteItem, addToCart } = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  }

  const hideModal = () => {
    setShow(false);
  }

  const add = (item) => {
    if (item.quantity < item.stock) {
      item.quantity += 1;
      setCart([...cart])
    }
  }

  const sub = (item) => {
    if (item.quantity > 1) {
    item.quantity -= 1;
    setCart([...cart])
    }
  }

  return (<>
    <div className='containerCartDetail'>
      <ul className='infoCartDetail'>
        <img src={prod.img} alt={prod.name} onClick = {() => handleClick()}/>
        <div className='nombre'>
          <div >
            <h3>{prod.name}</h3>
          </div>
          <div className='stock'>
            <h6>Quedan en stock: {prod.stock}</h6>
          </div>
        </div>
        <article>
          <div className='subtotal'>
            <div className='botonera'>
              <button className='boton' onClick={() => sub(prod)}>-</button>
              <h4>{prod.quantity} </h4>
              <button className='boton' onClick={() => add(prod)}>+</button>
            </div>
            <h5> * $ {prod.price}</h5>
            <h5>= ${prod.price * prod.quantity}.-</h5>
          </div>
        </article>
        <button
            className='botonDelete'
            onClick={() => deleteItem(prod.id)}
        >
            Eliminar
        </button>
      </ul>
    </div>
    <CardDetail key={prod.id} handleClose={hideModal} 
      id={prod.id} show={show} setShow={setShow}/>
    </>
  )
}

export default CartDetail
