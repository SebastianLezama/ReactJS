import React, { useState } from 'react'
import s from './Card.module.css'
import CardDetail from './CardDetail'

const Card = ({ prod, notInCart }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }

  const hideModal = () => {
    setShow(false)
  }

  return (
    <>
      <div className={s.card} onClick={() => handleClick()}>
        <img src={prod.img} alt={prod.name} />
        <div className={s.info}>
          <h3>{prod.name}</h3>
          <h4>$ {prod.price}</h4>
        </div>
      </div>
      <CardDetail
        key={prod.id}
        handleClose={hideModal}
        notInCart={notInCart}
        id={prod.id}
        show={show}
        setShow={setShow}
      />
    </>
  )
}

export default Card
