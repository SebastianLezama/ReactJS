import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()


const CartProvider = (props) => {
  const [ cart, setCart ] = useState([]);
  
  const deleteItem = (id) => {
    const filteredProd = cart.filter((prod) => prod.id !== id);
    setCart(filteredProd)
  }

  const addItem = (item, quantity) => {
    const newQ = item.quantity + quantity;
    item.quantity = newQ
    setCart([...cart])
    }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      addItem(item, quantity)
    } else {
      setCart([...cart, {...item, quantity }])
    }
  }

  const clearCart = () => {
    setCart([])
  }


  return (

    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteItem}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider