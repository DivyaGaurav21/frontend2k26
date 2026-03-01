import React from "react";

const CartModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 bg" onClick={onClose} />
      <div className="relative  bg-white rounded-2xl shadow-2xl p-6 w-200 max-h-[80vh] overflow-y-auto">{children}</div>
    </div>
  );
};

export default CartModal;
