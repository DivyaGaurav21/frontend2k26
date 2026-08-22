import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const API_URL = "https://dummyjson.com/products";

const Pagination1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currPage, setCurrPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const LIMIT = 10;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("API Failes");
      }
      const data = await res.json();
      setTotalPage(Math.ceil(data.total / LIMIT));
      setProducts(data.products);
    } catch (error) {
      setError("Error Occured : ", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Pagination Demo</p>
      <div className="items">
        {products.slice(currPage, currPage + LIMIT).map((product) => (
          <div className="card" key={product.key}>
            <img
              src={product.thumbnail}
              alt={`product_${product.id}`}
              width={100}
              height={100}
            />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <button
          className="btn"
          disabled={currPage === 0}
          onClick={() => setCurrPage((curr) => curr - 1)}
        >
          prev
        </button>
        {[...Array(totalPage)].map((_, i) => (
          <button
            onClick={() => setCurrPage(i)}
            className={i === currPage ? "active btn" : "btn"}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="btn"
          disabled={currPage === totalPage - 1}
          onClick={() => setCurrPage((curr) => curr + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination1;
