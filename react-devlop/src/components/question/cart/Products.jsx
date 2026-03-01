import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import CartModal from "./CartModal";
import Cart from "./Cart";

const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const fetchProduct = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const addCartHandler = (item) => {
    if (cartItem.some((cartItem) => cartItem.id === item.id)) {
      alert("item is already added in cart");
      return;
    }
    setCartItem((prev) => [...prev, item]);
  };

  console.log(cartItem, "qq");

  return (
    <div className="m-auto">
      <div className="bg-blue-500 h-10 flex flex-row justify-between  items-center  text-white font-bold mb-5 p-4">
        <span>Home</span>
        <button onClick={() => setOpenCart(true)}>
          Cart({cartItem.length})
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {!loading &&
          products.length > 0 &&
          products.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              brand={item.brand}
              category={item.category}
              rating={item.rating}
              addCartHandler={() => addCartHandler(item)}
            />
          ))}
        <CartModal isOpen={openCart} onClose={() => setOpenCart(false)}>
          <Cart cartItem = {cartItem} />
        </CartModal>
        {loading && <p>Loading..</p>}
        {error && <p>Some thing Went wrong</p>}
      </div>
    </div>
  );
};

export default Products;
