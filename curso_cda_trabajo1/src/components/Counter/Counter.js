import React, { useContext, useEffect, useState } from 'react'
import './Counter.scss'
import { BsCartDash, BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { FavContext } from '../../context/FavContext'

const Counter = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext)
  const { addToFavs, removeFromFavs, isInFavs } = useContext(FavContext)

  const [count, setCount] = useState(1)
  const [{ iconClassDash, iconClassPlus }, setIconClass] = useState({
    iconClassDash: 'icon',
    iconClassPlus: 'icon',
  })

  useEffect(() => {
    if (count === 1) {
      setIconClass((currentState) => ({
        ...currentState,
        iconClassPlus: 'icon',
      }))
      setIconClass((currentState) => ({
        ...currentState,
        iconClassDash: 'icon',
      }))
    } else if (count < item.stock) {
      setIconClass((currentState) => ({
        ...currentState,
        iconClassPlus: 'icon-hover',
      }))
    } else {
      setIconClass((currentState) => ({
        ...currentState,
        iconClassPlus: 'icon-max',
      }))
    }
  }, [count, item.stock])

  const dashOnClick = () => {
    if (count > 1) {
      setCount(count - 1)
      setIconClass((currentState) => ({
        ...currentState,
        iconClassDash: 'icon-hover',
      }))
    }
  }

  const plusOnClick = () => {
    count < item.stock && setCount(count + 1)
  }

  const Favoritos = ({ item }) => {
    return isInFavs(item.id) ? (
      <div className="addFavs" onClick={() => removeFromFavs(item.id)}>
        Quitar de Favoritos
      </div>
    ) : (
      <div className="addFavs" onClick={() => addToFavs(item)}>
        Agregar a Favoritos
      </div>
    )
  }

  return (
    <div className="Counter">
      <BsCartDash size="33" className={iconClassDash} onClick={dashOnClick} />
      <BsCartPlus size="33" className={iconClassPlus} onClick={plusOnClick} />
      <div>Stock Disponible: {item.stock}</div>
      <div>Cantidad: {count}</div>
      <Favoritos item={item}></Favoritos>
      <button onClick={() => addToCart(item, count)}>
        {isInCart(item.id) ? 'Sumar Cantidad' : 'Añadir al Carrito'}
      </button>
    </div>
  )
}

export default Counter
