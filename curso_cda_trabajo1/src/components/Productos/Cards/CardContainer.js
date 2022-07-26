import React, { useState, useEffect } from 'react'
import CardList from './CardList';
import s from './Card.module.css';
import { useParams } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";


const CardContainer = () => {

  const [ items, setItems ] = useState([]);
  const { categoryId } = useParams();
  const [ cat, setCat ] = useState('');
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    const URL = "https://fake-products-eric.herokuapp.com/api/products";
    const fetchCategory = categoryId ? `${URL}/category/${categoryId}` : `${URL}`;


    fetch(fetchCategory)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      });

    setCat(categoryId);
  }, [categoryId]);
  

  const categories = {
    remeras: 'Remeras',
    camisas: 'Camisas',
    gorras: 'Gorras',
    billeteras: 'Billeteras',
    rinoneras: 'Riñoneras'
  }
  
  const item = categoryId ? categories[cat] : 'Productos'

  return (
    <div className={s.CardContainer}>
      <h2>{item}</h2>
      <CardList items={items} />
      <div className={s.loading}>
        {loading && <PropagateLoader /> }
      </div>
    </div>
  )
}

export default CardContainer;
