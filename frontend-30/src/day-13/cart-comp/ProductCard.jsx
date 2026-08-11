import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {
    title,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
  } = product;

  const { cartHandler, isInCart } = useCart();

  const cartProduct = isInCart(product);

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-image">
        <img src={thumbnail} alt={title} />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <span className="category">{category}</span>

        <h3>{title}</h3>

        <div className="rating">
          ⭐ {rating}
          <span>({stock} in stock)</span>
        </div>

        <div className="price-section">
          <span className="price">${price}</span>

          <span className="discount">{discountPercentage}% OFF</span>
        </div>

        {cartProduct ? (
          <div className="quantity">
            <button
              className="qbtn"
              onClick={() => cartHandler(product, "decrese")}
            >
              -
            </button>
            <span>{cartProduct.quantity}</span>
            <button className="qbtn" onClick={() => cartHandler(product)}>
              +
            </button>
          </div>
        ) : (
          <button className="add-cart-btn" onClick={() => cartHandler(product)}>
            🛒 Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
