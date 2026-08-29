import { useEffect, useState } from "react";

function AbortController() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();

    fetch(`https://dummyjson.com/products/search?q=${query}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setResults(data.products))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    // Cleanup: cancel previous request
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      {results.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default AbortController;
