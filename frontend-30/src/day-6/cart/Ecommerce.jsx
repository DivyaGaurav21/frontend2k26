import React, { useState, useEffect } from "react";
import "./cart.css";
import Cart from "./Cart";
import Modal from "./Modal";

const API_URL = "https://dummyjson.com/products";

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      // quantity increase
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove from cart
  const decreseQuantity = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist.quantity > 1) {
      // quantity decrease
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      // remove completely
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    }
  };

  // ✅ Check if item in cart
  const isInCart = (product) => {
    return cart.find((item) => item.id === product.id);
  };

  return (
    <div>
      <header>
        <h3>Ecommerce</h3>
        <button onClick={() => setIsCartOpen(true)}>
          Cart ({cart.length})
        </button>
      </header>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} width={200} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            {cart.find((cartItem) => cartItem.id === product.id) ? (
              <div>
                <button onClick={() => decreseQuantity(product)}>-</button>
                <span>
                  {cart.find((cartItem) => cartItem.id === product.id).quantity}
                </span>
                <button onClick={() => addToCart(product)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      <Modal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart
          cartItems={cart}
          addToCart={addToCart}
          removeFromCart={decreseQuantity}
        />
      </Modal>
    </div>
  );
};

export default Ecommerce;
