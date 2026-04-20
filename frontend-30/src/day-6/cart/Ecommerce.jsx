import { useEffect, useState } from "react";
import Cart from "./Cart";
import Modal from "./Modal";
import "./cart.css";

const API_URL = "https://dummyjson.com/products";

export default function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  function isIntheCart(product) {
    return cartItem.find((item) => item.id === product.id);
  }

  // Add to cart
  const handleCart = (product, type = "add") => {
    if (isIntheCart(product)) {
      let updated = cartItem.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity:
              type === "decrease" ? item.quantity - 1 : item.quantity + 1,
          };
        }
        return item;
      });
      updated = updated.filter((item) => item.quantity > 0);

      setCartItem(updated);
    } else {
      if (type === "add") {
        setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Ecom</h2>
        <button onClick={() => setIsOpen(true)}>
          Cart ({cartItem.length})
        </button>
      </header>

      <div className="list">
        {products.map((item) => {
          const cartProduct = isIntheCart(item);

          return (
            <div key={item.id} className="item">
              <img src={item.thumbnail} alt={item.title} width={100} />
              <p>{item.title}</p>

              <div className="btn">
                <span>$ {item.price}</span>

                {cartProduct ? (
                  <div>
                    <button onClick={() => handleCart(item, "decrease")}>
                      -
                    </button>
                    <span>{cartProduct.quantity}</span>
                    <button onClick={() => handleCart(item, "add")}>+</button>
                  </div>
                ) : (
                  <button onClick={() => handleCart(item, "add")}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Cart cartItems={cartItem} handleCart={handleCart} />
      </Modal>
    </div>
  );
}
