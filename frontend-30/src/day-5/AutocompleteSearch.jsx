import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products/search";

const AutoCompleteSearch = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});
  const [show, setShow] = useState(false);

  const fetchProduct = async (query) => {
    if (cache[query]) {
      setProduct(cache[query]);
      return;
    }
    try {
      setLoading(true);
      let res = await fetch(`${API_URL}?q=${query}`);
      let data = await res.json();
      setProduct(data.products);
      setCache((prev) => ({ ...prev, [query]: data.products }));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        fetchProduct(search);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div>
      <div className="form">
        <p>AutoCompleteSearch</p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search products..."
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
      </div>
      {loading && <p>Loading...</p>}
      {show && (
        <div className="list">
          {product.map((item) => (
            <div
              className="item"
              key={item.id}
              onClick={() => setSearch(item.title)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;

// .form {
//   display: flex;
//   flex-direction: column;
// }

// input {
//   width: full;
//   padding: 8px;
//   flex: 1;
// }
// .list {
//   max-height: 200px;
//   overflow-y: scroll;
// }
// .item {
//   border: 1px solid black;
//   padding: 4px;
//   cursor: pointer;
// }
// .item:hover {
//   background: rgb(232, 231, 231);
// }
// ::-webkit-scrollbar{
//   display: none;
// }
