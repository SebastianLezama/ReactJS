import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const Products = () => {
  const APIURL = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
      });
  }, [APIURL]);

  return <CharacterList list={characters} />;
};

export default Products;
