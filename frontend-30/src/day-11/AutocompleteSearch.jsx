import React, { useEffect, useState } from "react";
import "./day11.css";

const API_URL = "https://dummyjson.com/products/search";

const AutocompleteSearch = () => {
  const [products, setProducts] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  let [cache , setCache] = useState({})

  const fetchData = async (query) => {
    if(cache[query]){
      setProducts(cache[query])
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}?q=${query}`);
      const data = await res.json();
      setProducts(data.products);
      setCache(prev => ({...prev , [query] : data.products}))
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!inputSearch) {
      setProducts([]);
      return;
    }
    const timer = setTimeout(() => {
      fetchData(inputSearch);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputSearch]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search products..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {error && <span>{error}</span>}
      {loading && <p>Loading.......</p>}
      <ul>
        {products.length > 0 &&
          show &&
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
};

export default AutocompleteSearch;
