import React, { useState } from 'react';
import './Counter.scss';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';



const Counter = ({stock}) => {
  const [{count}, setCount] = useState({count : 0});
  const [{iconClassDash, iconClassPlus}, setIconClass] = useState({iconClassDash:'icon', iconClassPlus: 'icon'});
  
  

  return (
          <ul className="Counter">
            <button className="button">
              <BsCartDash size="40" className={iconClassDash} onClick={() => {
                if(count > 0) {
                setCount(currentState => ({...currentState, count: currentState.count - 1}))}            
                setIconClass(currentState => ({...currentState, iconClassDash: 'icon-hover'}))
                }
              }
              />
            </button>
            <button className="button">
              <BsCartPlus size="40" className={iconClassPlus} onClick={() => {
                if(count < stock) {
                setCount(currentState => ({...currentState, count: currentState.count + 1}))}
                setIconClass(currentState => ({...currentState, iconClassPlus: 'icon-hover'}))
                }
              }
            />
            </button>
            <div>
              Stock Disponible: {stock}
            </div>
            <div>
              Cantidad: {count}
            </div>
            <button>
              Agragar al Carrito
            </button>
          </ul>
  )
}

export default Counter
