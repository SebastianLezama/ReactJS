import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

const Products = () => {
  const APIURL = "https://rickandmortyapi.com/api/character";
  const [characters, setCharacters] = useState();

  const fetchCharacters = async () => {
    const fetchedCharacters = fetch(APIURL).then((res) => res.json());

    const response = await fetchedCharacters;
    setCharacters(response);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <CharacterList list={characters ? characters : null} />;
};

export default Products;
