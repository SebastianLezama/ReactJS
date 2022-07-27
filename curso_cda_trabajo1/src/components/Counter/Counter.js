import React, { useEffect, useState } from 'react';
import './Counter.scss';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';


const Counter = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [{iconClassDash, iconClassPlus}, setIconClass] = useState({iconClassDash:'icon', iconClassPlus: 'icon'});
  
  useEffect(() => {
    if (count === 1) {
      setIconClass(currentState => ({...currentState, iconClassPlus: 'icon'}));
      setIconClass(currentState => ({...currentState, iconClassDash: 'icon'}))
    } else if (count < stock) {
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
    count < stock && setCount(count + 1)
  }

  return (
  <div className="Counter">
      <BsCartDash size="30" className={iconClassDash} onClick={dashOnClick}/>
      <BsCartPlus size="30" className={iconClassPlus} onClick={plusOnClick}/>
    <div>
      Stock Disponible: {stock}
    </div>
    <div>
      Cantidad: {count}
    </div>
    <button onClick={() => onAdd(count)}>
      Añadir al Carrito
    </button>
  </div>
  )
}

export default Counter
