import React, { useState, useEffect, useRef, useContext } from 'react';
import s from './Card.module.css';
import { MdClose } from 'react-icons/md';
import Counter from '../../Counter/Counter';
import { Link } from 'react-router-dom';



const CardDetail = ({ id, handleClose, show, setShow, isNotInCart }) => {

  const modalRef = useRef();
  const [item, setItem] = useState({});
  const apiUrl = `https://fake-products-eric.herokuapp.com/api/products/detail/${id}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setItem(res));
  }, []);

  const closeModal = e => {
    if(modalRef.current === e.target)setShow(false);
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
            <Counter item={item} isNotInCart={isNotInCart} />
            { isNotInCart && <Link to='/cart'><h4>Ir al carrito</h4></Link>}
          </div>
          <img src={item.img} alt={item.name} />
          <MdClose className={s.MdClose} onClick={handleClose} />
        </div>
      </div>
  }</>
  )
}

export default CardDetail
