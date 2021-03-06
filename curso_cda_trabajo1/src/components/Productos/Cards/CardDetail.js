import React, { useState, useEffect, useRef } from 'react';
import s from './Card.module.css';
import { MdClose } from 'react-icons/md';
import Counter from '../../Counter/Counter';


const CardDetail = ({ id, handleClose, show, setShow }) => {

  const modalRef = useRef();
  const [item, setItems] = useState({});
  const apiUrl = `https://fake-products-eric.herokuapp.com/api/products/detail/${id}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  const closeModal = e => {
    if(modalRef.current === e.target)setShow(false);
  }

  const onAdd = (quantity) => {
    console.log(quantity);
  } 

  // me falta separar el render a otro componente como habias pedido, desp lo hago
  return (
  <>
    {show &&
      <div className={s.CardDetail} ref={modalRef} onClick={closeModal}>
        <div className={s.divModal}>
          <div>
            <h2>Detalle del producto</h2>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <Counter stock={item.stock} onAdd={onAdd} />
          </div>
          <img src={item.img} alt="image" />
          <MdClose className={s.MdClose} onClick={handleClose} />
        </div>
      </div>
  }</>
  )
}

export default CardDetail
