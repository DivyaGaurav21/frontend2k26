import React from "react";
import useFetchProducts from "./hooks/useFetchAllProducts";

import "./day13.css";
import ProductCard from "./cart-comp/ProductCard";
import Header from "./cart-comp/Header";
import Modal from "./cart-comp/Modal";
import { useCart } from "./context/CartContext";

const EcomCartMcContext = () => {
  const { products, loading, error } = useFetchProducts();
  const { openModal, cartItem } = useCart();

  if (error) {
    return <p>Error Occurs : {error}</p>;
  }
  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <Header />
      <div className="products">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <Modal>
        {/* TODO  */}
        {cartItem.length > 0 &&
          cartItem.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </Modal>
    </div>
  );
};

export default EcomCartMcContext;
