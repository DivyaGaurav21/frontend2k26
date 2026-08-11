import React from "react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItem, openModal } = useCart();
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">E</div>
        <div className="logo-text">
          <span>Shop</span>
          <strong>Ease</strong>
        </div>
      </div>

      <button className="cart-btn" onClick={openModal}>
        🛒
        <span>Cart</span>
        <span className="cart-count">{cartItem.length}</span>
      </button>
    </header>
  );
};

export default Header;
