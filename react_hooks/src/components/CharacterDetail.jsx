import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CharacterModal from "./CharacterModal";

const CharacterDetail = ({ id, handleClose, showModal, setShowModal }) => {
  const [character, setCharacter] = useState();
  const modalRef = useRef();
  const URL = `https://rickandmortyapi.com/api/character/${id}`;

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, [URL]);

  return (
    <div>
      <CharacterModal
        character={character}
        closeModal={closeModal}
        handleClose={handleClose}
        showModal={showModal}
        modalRef={modalRef}
      />
    </div>
  );
};

export default CharacterDetail;
