import React from "react";
import { useState } from "react";
import CharacterDetail from "./CharacterDetail";
import "./Characters.css";

const CharacterCard = ({ characters }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="characterCard" onClick={() => handleClick()}>
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
      <CharacterDetail
        key={characters.id}
        id={characters.id}
        handleClose={hideModal}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default CharacterCard;
