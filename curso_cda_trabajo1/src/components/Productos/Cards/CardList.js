import React from "react";
import Card from "./Card";
import s from "./Card.module.css";

const CardList = ({ items, notInCart, query, categoryId }) => {
  const filterItems = (prod, text) => {
    if (!text) {
      return prod;
    }

    return prod.filter((prod) => prod.name.toLowerCase().includes(query));
  };

  const filteredItems = filterItems(items, query);
  const data = filteredItems.sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className={s.CardList}>
      {data.map((prod) => (
        <Card prod={prod} key={prod.id} notInCart={notInCart} />
      ))}
    </div>
  );
};

export default CardList;
