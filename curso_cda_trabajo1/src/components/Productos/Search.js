import React, { useState } from "react";
import "./Search.scss";

const Search = ({ handleQuery }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuery(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="buscador"
        type="text"
        placeholder="Buscar productos"
        onChange={handleChange}
        value={text}
      />
      <button className="buscarButton">Buscar</button>
    </form>
  );
};

export default Search;
