import React from "react";

function Modal({ showModal, setShowModal }) {
  return <>{showModal ? <div>True Modal</div> : null}</>;
}

export default Modal;
