import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import CardModal from './CardModal'

const CardDetail = ({ id, handleClose, show, setShow, notInCart }) => {
  const { isInCart } = useContext(CartContext)

  const modalRef = useRef()
  const [item, setItem] = useState({})
  const apiUrl = `https://fake-products-eric.herokuapp.com/api/products/detail/${id}`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setItem(res))
  }, [apiUrl])

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShow(false)
  }

  const showItemInCart = () => {
    return (
      <Link to="/cart">
        <h4>
          {isInCart(item.id) ? 'Ver producto en el carrito' : 'Ir al carrito'}
        </h4>
      </Link>
    )
  }

  return (
    <CardModal
      item={item}
      handleClose={handleClose}
      show={show}
      notInCart={notInCart}
      modalRef={modalRef}
      closeModal={closeModal}
      showItemInCart={showItemInCart}
    />
  )
}

export default CardDetail
