import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import s from "./Card.module.css";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import Search from "../Search";
import { categoriesSpanish } from "../../../utils/Productos";

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

  const prodCategory = categoryId ? categoriesSpanish[category] : "Productos";

  const handleQuery = (e) => {
    setQuery(e);
  };

  return (
    <div className={s.CardContainer}>
      <div className="mainContainer">
        <h2>{prodCategory}</h2>
        <Search handleQuery={handleQuery} />
        <CardList items={items} notInCart={true} query={query} onProd={true} />
        <div className={s.loading}>{loading && <PropagateLoader />}</div>
      </div>
    </div>
  );
};

export default CardContainer;
