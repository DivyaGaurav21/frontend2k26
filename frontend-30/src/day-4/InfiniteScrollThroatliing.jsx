import React, { useEffect, useRef, useState } from "react";
import "./day4.css";

const API_URL = "https://dummyjson.com/products";
const InfiniteScrollThrottling = ({
  api_url = API_URL,
  limit = 10,
  skip = 0,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState(skip);

  const throttleRef = useRef(null);

  // ✅ Fetch Data (depends on pagination)
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${api_url}?limit=${limit}&skip=${pagination}`);
      const json = await res.json();

      setData((prev) => [...prev, ...json.products]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Run API when pagination changes
  useEffect(() => {
    fetchData();
  }, [pagination]);

  // ✅ Scroll Handler (only near bottom)
  function handleScroll() {
    setPagination((prev) => prev + limit);
  }

  // ✅ Throttle Function
  function throttle(cb, delay) {
    let lastCall = 0;

    return function (...args) {
      const now = Date.now();

      if (now - lastCall >= delay) {
        lastCall = now;
        cb(...args);
      }
    };
  }

  // ✅ Setup throttled scroll listener once
  useEffect(() => {
    throttleRef.current = throttle(handleScroll, 1000);

    window.addEventListener("scroll", throttleRef.current);

    return () => {
      window.removeEventListener("scroll", throttleRef.current);
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

export default InfiniteScrollThrottling;
