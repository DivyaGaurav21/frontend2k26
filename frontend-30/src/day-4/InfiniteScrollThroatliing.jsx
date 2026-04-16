import React, {  useEffect, useState } from "react";
import "./day4.css";

const API_URL = "https://dummyjson.com/products";
const InfiniteScrollThroatliing = ({
  api_url = API_URL,
  limit = 10,
  skip = 0,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(skip);

  const fetchData = async () => {
    try {
      setLoading(true);
      let jsonData = await fetch(
        `${api_url}?limit=${limit}&skip=${pagination}`,
      );
      let data = await jsonData.json();
      setData((prev) => [...prev, ...data.products]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    setPagination((prev) => prev + limit);
    fetchData();
  };

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

  const throttleFn = throttle(handleScroll, 1000);

  useEffect(() => {
    window.addEventListener("scroll", throttleFn);
    return () => {
      window.removeEventListener("scroll", throttleFn);
    };
  }, []);

  return (
    <div>
      <div className="items">
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.thumbnail} width={100} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollThroatliing;
