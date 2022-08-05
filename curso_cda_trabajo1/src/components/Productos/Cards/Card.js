import React, { useState } from "react";
import s from "./Card.module.css";
import CardDetail from "./CardDetail";
import Shipping from "./Shipping";

const Card = ({ prod, notInCart, onMain }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  const [drop, setDrop] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDrop(false);
    } else {
      setDrop(true);
    }
  };
  const onMouseLeave = () => {
    setDrop(false);
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
          {drop && <Shipping priceValue={newPrice} className={s.shipping} />}
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
