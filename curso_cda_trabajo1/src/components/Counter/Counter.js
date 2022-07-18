import React, { useEffect, useState } from 'react';
import './Counter.scss';
import { BsCartDash, BsCartPlus } from 'react-icons/bs';
import logButton from '../Classes/logButton'



const Counter = ({stock}) => {
  const [{count}, setCount] = useState({count : 1});
  const [{iconClassDash, iconClassPlus}, setIconClass] = useState({iconClassDash:'icon', iconClassPlus: 'icon'});
  
  useEffect(() => {
    if (count === 0) {
      setIconClass(currentState => ({...currentState, iconClassPlus: 'icon'}));
      setIconClass(currentState => ({...currentState, iconClassDash: 'icon'}))
    } else if (count < stock) {
      setIconClass(currentState => ({...currentState, iconClassPlus: 'icon-hover'}))
    } else {setIconClass(currentState => ({...currentState, iconClassPlus: 'icon-max'}))}
    
  }, [count]);
  

  return (
          <ul className="Counter">
            <button className="button">
              <BsCartDash size="40" className={iconClassDash} onClick={() => {
                if (count > 0) {
                  setCount(currentState => ({...currentState, count: currentState.count - 1}));
                  setIconClass(currentState => ({...currentState, iconClassDash: 'icon-hover'}))
                  }
                }
                }
              />
            </button>
            <button className="button">
              <BsCartPlus size="40" className={iconClassPlus} onClick={() => {
                if (count < stock) {
                setCount(currentState => ({...currentState, count: currentState.count + 1}));
              }
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
            <button onClick={() => {console.log(count, " productos añadidos al carrito.")}}>
              Añadir al Carrito
            </button>
          </ul>
  )
}

export default Counter
