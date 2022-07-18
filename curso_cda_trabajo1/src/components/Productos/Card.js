import React from 'react';
import s from './Card.module.css';


const Card = ({ prod }) => {
  return (
    <div className={s.card}>
        <img src={prod.img} alt={prod.name} />
        <div className={s.info}>
            <h3>{prod.name}</h3>
            <h4>$ {prod.price}</h4>
        </div>
    </div>  )
}

export default Card