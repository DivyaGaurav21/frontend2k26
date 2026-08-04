import React, { useState } from "react";
import useFetchProducts from "./hooks/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity } from "./redux/cartSlice";
import Cart from "./Cart";
import Modal from "./Modal";
import "./cart.css"

const ReduxEcom = () => {
  useFetchProducts();
  const dispatch = useDispatch();

  const products = useSelector((store) => store.product.products);
  const cartItems = useSelector((store) => store.cart.cartItems);

  const [isOpen, setIsOpen] = useState(false);

  const cartProduct = (id) => cartItems.find((item) => item.id === id);
  console.log(products, "sss");
  return (
    <div className="list">
      <header>
        <h2>Ecom</h2>

        <button onClick={() => setIsOpen(true)}>
          Cart ({cartItems.length})
        </button>
      </header>

      <div className="list">
        {products.map((item) => {
          const cartItem = cartProduct(item.id);

          return (
            <div className="item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} width={100} />

              <p>{item.title}</p>

              <div className="btn">
                <span>$ {item.price}</span>

                {cartItem ? (
                  <div>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>

                    <span>{cartItem.quantity}</span>

                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                ) : (
                  <button onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Cart />
      </Modal>
    </div>
  );
};

export default ReduxEcom;
