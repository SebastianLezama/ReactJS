import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import s from "./Card.module.css";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import Search from "../Search";

const CardContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);

    const URL = "https://fake-products-eric.herokuapp.com/api/products";
    const fetchCategory = categoryId
      ? `${URL}/category/${categoryId}`
      : `${URL}`;

    fetch(fetchCategory)
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setLoading(false);
      });
    setCategory(categoryId);

    return () => {
      setQuery("");
    };
  }, [categoryId]);

  const categories = {
    remeras: "Remeras",
    camisas: "Camisas",
    gorras: "Gorras",
    billeteras: "Billeteras",
    rinoneras: "Riñoneras",
  };

  const item = categoryId ? categories[category] : "Productos";

  const handleQuery = (e) => {
    setQuery(e);
  };

  return (
    <div className={s.CardContainer}>
      <h2>{item}</h2>
      <Search handleQuery={handleQuery} />
      <CardList
        items={items}
        notInCart={true}
        query={query}
        categoryId={categoryId}
      />
      <div className={s.loading}>{loading && <PropagateLoader />}</div>
    </div>
  );
};

export default CardContainer;
