import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";

const Practice = () => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalPage = Math.ceil(data?.total / 10);
  const limit = 10;
  const skip = 10;

  const fetchProducts = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}?limit=${limit}&skip=${page * skip}`,
      );
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  const getPagination = () => {
    if (totalPage <= 7) {
      return Array.from({ length: totalPage }, (_, i) => i);
    }

    if (page <= 2) {
      return [0, 1, 2, "...", totalPage - 1];
    }

    if (page >= totalPage - 3) {
      return [0, "...", totalPage - 3, totalPage - 2, totalPage - 1];
    }

    return [0, "...", page - 1, page, page + 1, "...", totalPage - 1];
  };

  return (
    <div>
      <div>
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        {/* {totalPage &&
          [...Array(totalPage)].map((_, i) => (
            <button
             onClick={() => setPage(i)} key={i}
             className={i === page ? "active" : ""}
             >
              {i + 1}
            </button>
          ))} */}
        {getPagination().map((item, index) =>
          item === "..." ? (
            <span key={index} style={{ margin: "0 8px" }}>
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={page === item ? "active" : ""}
            >
              {item + 1}
            </button>
          ),
        )}
        <button
          disabled={page === totalPage - 1}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <ul>
        {data?.products.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Practice;
