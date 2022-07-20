import React, { useState, useEffect } from 'react'
import CardList from './CardList';
import s from './Card.module.css';



const CardContainer = () => {

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('https://fake-products-eric.herokuapp.com/api/products')
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);
  
  return (
    <div className={s.CardContainer}>
      <h2>Productos</h2>
      <CardList items={items} />
    </div>
  )
}

export default CardContainer;
