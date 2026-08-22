import React, { , useState } from "react";

 function Counter() {
  const [count, setCount] = useState(() =>
    Number(localStorage.getItem("count") || 0)
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <span> {count}</span>{" "}
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
    </div>
  );
}

export default Counter;

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(() =>
//     Number(localStorage.getItem("count") || 0)
//   );

//   function incCounter() {
//     setCount((prev) => {
//       let newCount = prev + 1;
//       localStorage.setItem("count", newCount);
//       return newCount;
//     });
//   }

//   return (
//     <div className="App">
//       <span> {count}</span> <button onClick={incCounter}>inc</button>
//     </div>
//   );
// }