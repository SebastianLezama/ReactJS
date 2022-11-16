import React from "react";
import "./Characters.css";

const CharacterModal = ({
  character,
  handleClose,
  modalRef,
  showModal,
  closeModal,
}) => {
  return (
    <>
      {showModal && (
        <div className="characterDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <img
              src={character.image}
              alt={character.name}
              onClick={handleClose}
            />
            <div className="modalInfo">
              <div>Name: {character.name}</div>
              <div>Species: {character.species}</div>
              <div>Origin: {character.origin.name}</div>
              <div>Status: {character.status}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterModal;
