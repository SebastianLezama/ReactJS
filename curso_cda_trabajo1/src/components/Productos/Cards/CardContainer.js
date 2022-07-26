import React, { useState, useEffect } from 'react'
import CardList from './CardList';
import s from './Card.module.css';
import { useParams } from 'react-router-dom';
import { categories } from '../Productos';




const CardContainer = () => {

  const [ items, setItems ] = useState([]);
  const { categoryId } = useParams();
  const [ cat, setCat ] = useState('');
  
  useEffect(() => {
    const URL = "https://fake-products-eric.herokuapp.com/api/products";
    const fetchCategory = categoryId ? `${URL}/category/${categoryId}` : `${URL}`;


    fetch(fetchCategory)
      .then((res) => res.json())
      .then((res) => setItems(res));

    setCat(categories.categoryId);
  }, [categoryId]);
  
  const item = categoryId ? cat : 'Productos';
  console.log(categoryId);
  console.log(cat);

  return (
    <div className={s.CardContainer}>
      <h2>{item}</h2>
      <CardList items={items} />
    </div>
  )
}

export default CardContainer;
