import React, { useState, useEffect } from 'react';
import s from './Card.module.css';
import { MdClose } from 'react-icons/md'


const CardDetail = ({ id, handleClose, show, setShow }) => {

  const [item, setItems] = useState([]);
  const apiUrl = 'https://fake-products-eric.herokuapp.com/api/products/detail/' + id;
  // const apiUrl = 'https://fake-products-eric.herokuapp.com/api/products/detail/61d9a43e5e2626b0af873199'
  

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  return (
  <>
    {show &&
      <div className={s.CardDetail}>
        <div className={s.divModal}>
          <div>
            <h3>Detalle del producto</h3>
            <h3>{item.name}</h3>
            <h3>${item.price}</h3>
          </div>
          <img src={item.img} alt="image" />
          <MdClose className={s.MdClose} onClick={handleClose}></MdClose>
        </div>
      </div>
  }</>
  )
}

export default CardDetail
