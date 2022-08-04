import React from 'react'
import Card from './Card'
import s from './Card.module.css'

const CardList = ({ items, notInCart }) => {
  const data = [...items].sort((a, b) => (a.name > b.name ? 1 : -1))
  return (
    <div className={s.CardList}>
      {data.map((prod) => (
        <Card prod={prod} key={prod.id} notInCart={notInCart} />
      ))}
    </div>
  )
}

export default CardList
