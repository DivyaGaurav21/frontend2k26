// import React, { useEffect, useState } from "react";

// const ITEMS_PER_PAGE = 10;

// const Pagination2 = () => {
//   const [data, setData] = useState([]);
//   const [totalItems, setTotalItems] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);

//       const skip = (currentPage - 1) * ITEMS_PER_PAGE;

//       const res = await fetch(
//         `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`
//       );

//       const result = await res.json();

//       setData(result.products);
//       setTotalItems(result.total); // total items from API
//     } catch (err) {
//       console.log("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [currentPage]);

//   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

//   return (
//     <div className="p-4">
//       {loading && <p>Loading...</p>}

//       <div className="flex flex-wrap gap-3">
//         {data.map((item) => (
//           <div key={item.id} className="border p-2 w-48">
//             <img src={item.thumbnail} alt={item.title} />
//             <p>{item.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div className="mt-4 flex gap-2">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           className="border px-3 py-1"
//         >
//           Prev
//         </button>

//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`border px-3 py-1 ${
//               currentPage === i + 1 ? "bg-amber-300" : ""
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className="border px-3 py-1"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pagination2;

import React, { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 10;

const Pagination2 = () => {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const skip = (currPage - 1) * ITEMS_PER_PAGE;

      const res = await fetch(
        `https://dummyjson.com/products?limit=${ITEMS_PER_PAGE}&skip=${skip}`,
      );
      const apiData = await res.json(res);
      setProducts(apiData.products);
      setTotalItems(apiData.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchData();
  }, [currPage]);

  return (
    <div>
      <div className="mb-2">
        <button
          onClick={() => setCurrentPage(currPage - 1)}
          disabled={currPage === 1}
          className="border px-1"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`border px-2 ${currPage === i + 1 ? "bg-amber-100" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currPage + 1)}
          disabled={currPage === totalPages}
          className="border px-1"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {loading && <p>Loading......</p>}
        {error && <p>Error......</p>}
        {products.map((item) => (
          <div key={item.id} className="border max-w-40">
            <img src={item.thumbnail} alt={item.title} />
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination2;
