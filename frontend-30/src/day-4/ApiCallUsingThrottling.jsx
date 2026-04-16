import React, { useEffect, useRef, useState } from "react";


const API = "https://dummyjson.com/products/search";

const ThrottleSearch = () => {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const throttleRef = useRef(null);

  // API call
  async function fetchProducts(query) {
    if (!query) return;

    try {
      console.log("API CALL:", query);
      const res = await fetch(`${API}?q=${query}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  }

    function throttle(cb, delay) {
    let lastCall = 0;

    return function (...args) {
      let now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        cb(...args);
      }
    };
  }


  // create throttled function once
  useEffect(() => {
    throttleRef.current = throttle(fetchProducts, 1000);
  }, []);

  // call throttled API on input change
  function handleChange(e) {
    const value = e.target.value;
    setInput(value);

    throttleRef.current(value);
  }

  return (
    <div>
      <h3>Throttle Search</h3>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />

      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThrottleSearch;