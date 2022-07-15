import React, { useState } from 'react'

const Counter = ({stock}) => {
  const [{count}, setCount] = useState({count :0});

  return (
          <div className="App">
            <button onClick={() => 
              setCount(currentState => ({...currentState, count: currentState.count - 1}))
              }
            >
              -
            </button>
            <button onClick={() => 
              setCount(currentState => ({...currentState, count: currentState.count + 1}))
              }
            >
              +
            </button>
            <div>
              Stock Disponible: {stock}
            </div>
            <div>
              Cantidad: {count}
            </div>
          </div>
  )
}

export default Counter