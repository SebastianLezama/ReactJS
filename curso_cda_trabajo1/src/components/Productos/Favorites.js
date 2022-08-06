import React, { useContext } from "react";
import { FavContext } from "../../context/FavContext";
import CardList from "./Cards/CardList";
import "./Favorites.scss";

const Favorites = () => {
  const { favs, clearFavs } = useContext(FavContext);

  if (favs.length === 0) {
    return (
      <div className="favs-container">
        <div className="mainContainer">
          <div className="favs">
            <h2>No hay favoritos</h2>
            <button className="vaciarFavs" onClick={clearFavs}>
              Vaciar Favoritos
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favs-container">
      <div className="mainContainer">
        <div className="favs">
          <h2>Favoritos</h2>
          <button className="vaciarFavs" onClick={clearFavs}>
            Vaciar Favoritos
          </button>
        </div>
        <div className="card-container">
          <CardList items={favs} notInCart={false} onProd={true} />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
