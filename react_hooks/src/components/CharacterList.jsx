import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ list }) => {
  return (
    <div className="characterList">
      {list
        ? list.results.map((res) => (
            <CharacterCard key={res.id} characters={res} />
          ))
        : null}
    </div>
  );
};

export default CharacterList;
