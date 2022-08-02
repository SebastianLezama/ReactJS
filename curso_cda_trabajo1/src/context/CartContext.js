import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext()


const CartProvider = (props) => {
  const [ cart, setCart ] = useState(() => {
    const localData = localStorage.getItem('items');
    return localData ? JSON.parse(localData) : [];
  });

  const [ total, setTotal ] = useState(0)
  const [ cartItems, setCartItems ] = useState(0)
  
  const deleteItem = (id) => {
    const filteredProd = cart.filter((prod) => prod.id !== id);
    setCart(filteredProd)
  }

  const addItem = (item, quantity) => {
    const addNew = cart.map((p) => p.id === item.id ? {...p, quantity: p.quantity + quantity} : p)
    setCart(addNew)
    }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // check
  const checkStock = (item, quantity) => {
    const itemQuantity = cart.filter((p)=> p.id === item.id);
    const newItem = {...itemQuantity[0]};
    return item.stock >= (newItem.quantity + quantity);
  }

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      if (checkStock(item, quantity)){
        addItem(item, quantity)
      } else {alert('No hay suficiente stock!')}
    } else {
      setCart([...cart, {...item, quantity }])
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const calcTotal = () => {
    const cartCopy = [...cart];
    let count = 0;
    cartCopy.forEach((p) => count += p.quantity * p.price)
    setTotal(count)
  }

  const cartItemsCounter = () => {
    const cartCopy = [...cart];
    let count = 0;
    cartCopy.forEach((p) => count += p.quantity)
    setCartItems(count)
  }

  useEffect(() => {
    calcTotal()
    cartItemsCounter()
    localStorage.setItem('items', JSON.stringify(cart));
  }, [cart])
  

  return (

    <CartContext.Provider value={{ cart, total, cartItems, setCart, addToCart, clearCart, deleteItem, calcTotal}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider