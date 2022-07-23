import React, { useState, useEffect } from 'react'
import CardList from './CardList';
import s from './Card.module.css';
import { useParams } from 'react-router-dom';



const CardContainer = () => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  
  useEffect(() => {
    if(categoryId){
      fetch(
        `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
      )
        .then((res) => res.json())
        .then((res) => setItems(res));
    } else {
      fetch('https://fake-products-eric.herokuapp.com/api/products')
        .then((res) => res.json())
        .then((res) => setItems(res));
    }
  }, [categoryId]);
  
  return (
    <div className={s.CardContainer}>
      <h2>Productos</h2>
      <CardList items={items} />
    </div>
  )
}

export default CardContainer;
