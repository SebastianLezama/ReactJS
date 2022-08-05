import React, { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import { categoriesFromApi } from "../../utils/Productos";
import { MapCategories } from "../NavBar/Header/DropDown";
import CardList from "../Productos/Cards/CardList";
import "./index.scss";

function Main() {
  const { favs } = useContext(FavContext);

  return (
    <div className="main">
      <div className="mainContainer">
        <ul className="listContainer">
          <h2>Categorías</h2>
          <ul className="catContainer">
            <MapCategories categories={categoriesFromApi} className="catMain" />
          </ul>
          <li className="favList">
            <h2>Productos en favoritos</h2>
            <CardList items={favs} notInCart={false} onMain={true} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
