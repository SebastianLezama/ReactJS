import React, { useContext, useEffect, useState } from 'react';
import './Counter.scss';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';


const Counter = ( {item, isNotInCart} ) => {
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [{iconClassDash, iconClassPlus}, setIconClass] = useState({iconClassDash:'icon', iconClassPlus: 'icon'});
  
  useEffect(() => {
    if (count === 1) {
      setIconClass(currentState => ({...currentState, iconClassPlus: 'icon'}));
      setIconClass(currentState => ({...currentState, iconClassDash: 'icon'}))
    } else if (count < item.stock) {
      setIconClass(currentState => ({...currentState, iconClassPlus: 'icon-hover'}))
    } else {setIconClass(currentState => ({...currentState, iconClassPlus: 'icon-max'}))}
    
  }, [count]);


  const dashOnClick = () => {
    if (count > 1) {
          setCount(count - 1);
          setIconClass(currentState => ({...currentState, iconClassDash: 'icon-hover'}))
          }
  }

  const plusOnClick = () => {
    count < item.stock && setCount(count + 1)
  }

  return (
  <div className="Counter">
      <BsCartDash size="33" className={iconClassDash} onClick={dashOnClick}/>
      <BsCartPlus size="33" className={iconClassPlus} onClick={plusOnClick}/>
    <div>
      Stock Disponible: {item.stock}
    </div>
    <div>
      Cantidad: {count}
    </div>
    <button onClick={() => addToCart(item, count)}>
      {isNotInCart ? 'Añadir al Carrito' : 'Sumar al Carrito'}
    </button>
  </div>
  )
}

export default Counter
