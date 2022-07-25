import React, { useState, useEffect } from 'react'
import CardList from './CardList';
import s from './Card.module.css';
import { useParams } from 'react-router-dom';



const CardContainer = () => {

  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  
  useEffect(() => {
    const URL = "https://fake-products-eric.herokuapp.com/api/products";
    const fetchCategory = categoryId ? `${URL}/category/${categoryId}` : `${URL}`;

    fetch(fetchCategory)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, [categoryId]);
  
  return (
    <div className={s.CardContainer}>
      <h2>Productos</h2>
      <CardList items={items} />
    </div>
  )
}

export default CardContainer;
