import React from "react";

const Modal = ({ showModal, logInfo }) => {
  return <>{showModal && <div className="Modal">{logInfo[0].date}</div>}</>;
};

export default Modal;
