import React, { useState } from "react";
import useFetchData from "./useFetchData";

const API_URL = "https://dummyjson.com/products?limit=200";
const PAGE_SIZE = 10;

const Pagination = () => {
  const { data, loading } = useFetchData(API_URL);
  const [currPage, setCurrentPAge] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }

  const totalPage = Math.ceil(data?.products?.length / PAGE_SIZE);
  const startIdx = PAGE_SIZE * currPage;
  const endIdx = startIdx + PAGE_SIZE;

  return (
    <section>
      <div className="mb-8">
        <button
          className="bttn"
          disabled={currPage === 0}
          onClick={() => setCurrentPAge((curr) => curr - 1)}
        >
          {"<<"}
        </button>
        {totalPage &&
          [...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPAge(i)}
              className={`p-2 border border-black min-w-8 m-1 cursor-pointer ${i == currPage ? "bg-amber-100" : ""}`}
            >
              {i+1}
            </button>
          ))}
        <button
          className="bttn"
          disabled={currPage === totalPage - 1}
          onClick={() => setCurrentPAge((curr) => curr + 1)}
        >
          {">>"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.products &&
          data.products.slice(startIdx, endIdx).map((item) => (
            <div
              key={item.id}
              className="border border-black max-w-30 min-w-28"
            >
              <h3 className="text-sm">{item.title}</h3>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-20 w-20"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Pagination;
