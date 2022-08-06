import React, { useState } from "react";
import s from "./Card.module.css";
import CardDetail from "./CardDetail";
import Shipping from "./Shipping";

const Card = ({ prod, notInCart, onMain, onProd }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const [grow, setGrow] = useState(false);
  const onMouseEnter = () => {
    setGrow(true);
  };
  const onMouseLeave = () => {
    setGrow(false);
  };

  const newPrice = prod.price * 20;

  return (
    <>
      <div
        className={onMain ? s.cardMain : s.card}
        onClick={() => handleClick()}
        onMouseEnter={onMain && onMouseEnter}
        onMouseLeave={onMain && onMouseLeave}
      >
        <img src={prod.img} alt={prod.name} />
        <div className={s.info}>
          <h3>{prod.name}</h3>
          <h4>Precio: $ {newPrice}</h4>
          <Shipping
            priceValue={newPrice}
            className={s.shipping}
            grow={grow}
            onProd={onProd}
          />
        </div>
      </div>
      <CardDetail
        key={prod.id}
        handleClose={hideModal}
        notInCart={notInCart}
        id={prod.id}
        show={show}
        setShow={setShow}
      />
    </>
  );
};

export default Card;
