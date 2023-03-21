import React from "react";
import "./Modal.css";

const Modal = ({ showModal, logInfo, modalRef, closeModal }) => {
  return (
    <>
      {showModal && (
        <div className="cardDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <div className="divModal">
              {logInfo[0].email}
              <div>{logInfo[0].date}</div>
              <div>{logInfo[0].alegria}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
