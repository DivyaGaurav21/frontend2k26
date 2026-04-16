import React, { useEffect, useState } from "react";

const API_URL = "https://dummyjson.com/products/search";

const Debaunce = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  console.log(cache);

  async function searchProduct(query) {
    if (cache[query]) {
      setProduct(cache[query]);
      return;
    }
    try {
      setLoading(true);
      let jsonData = await fetch(`${API_URL}?q=${query}`);
      let data = await jsonData.json();
      setProduct(data.products);
      setCache((prev) => ({ ...prev, [query]: data.products }));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      if (search) {
        searchProduct(search);
      } else {
        setProduct([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search, searchProduct]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search.."
      />
      {loading && <p>Loading...</p>}
      <div className="items">
        {product.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.thumbnail} width={100} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Debaunce;
