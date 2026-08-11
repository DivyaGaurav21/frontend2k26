import React from "react";
import { useCart } from "../context/CartContext";

const Modal = ({ children }) => {
  const { isOpen, closeModal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal-content">
        <div>
          <button onClick={closeModal}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
