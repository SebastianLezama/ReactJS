import React from "react";
import "./Characters.css";

const CharacterCard = ({ characters }) => {
  return (
    <div className="characterCard">
      <img src={characters ? characters.image : null} alt={characters.name} />
      <div className="characterInfoContainer">
        <div className="characterName">
          {characters ? characters.name : null}
        </div>
        <div className="characterInfo">
          {characters ? characters.species : null}
          <div>{characters ? characters.type : null}</div>
          <div>{characters ? characters.origin.name : null}</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
