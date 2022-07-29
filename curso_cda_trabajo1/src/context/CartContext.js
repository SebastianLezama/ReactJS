import React, { createContext, useState } from 'react'


export const CartContext = createContext()


const CartProvider = (props) => {
  const [ cart, setCart ] = useState([]);

  const addItem = (item, quantity) => {
    const filteredProd = cart.filter((prod) => prod.id === item.id);
    const addedProd = filteredProd.quantity + quantity;
    deleteItem(item.id)
    setCart([...cart, {...item, addedProd }])
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

  const deleteItem = (id) => {
    const filteredProd = cart.filter((prod) => prod.id !== id);
    setCart(filteredProd)
  }

  return (

    <CartContext.Provider value={{ cart, addToCart, clearCart, deleteItem}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider