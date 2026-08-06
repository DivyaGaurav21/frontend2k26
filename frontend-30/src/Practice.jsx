import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products?limit=95";

const Practice = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let limit = 5;
  let si = page * limit;
  let ei = si + limit;

  const totalPage = Math.ceil(products?.length / limit);
  const itemsOnPage = products?.slice(si, ei);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          prev
        </button>
        {totalPage &&
          [...Array(totalPage)].map((_, i) => (
            <button
              onClick={() => setPage(i)}
              key={i}
              className={i === page ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
        <button
          disabled={page === totalPage - 1}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul>
        {itemsOnPage.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
