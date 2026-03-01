import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setData(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ITEMONPAGE = 5;
  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / ITEMONPAGE);

  const si = currPage * ITEMONPAGE;
  const ei = si + ITEMONPAGE;

  return (
    <div>
      <div className="mb-2">
        <button  onClick={() => setCurrPage(curr => curr - 1)} disabled={currPage === 0}>Prev</button>
        {totalPages &&
          [...Array(totalPages)].map((_, i) => (
            <button
              className={`border px-2 ${i === currPage ? "bg-amber-200" : ""}`}
              onClick={() => setCurrPage(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => setCurrPage(curr => curr + 1)} disabled={currPage === totalPages-1}>Next</button>
      </div>
      <div>
        <p>{loading && "loading"}</p>
        <p>{error && "error"}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {data.slice(si, ei).map((item) => (
          <div className=" border max-w-50" key={item.id}>
            <img src={item.thumbnail} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
