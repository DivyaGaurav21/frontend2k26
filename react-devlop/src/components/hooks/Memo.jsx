import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState("");

  const double = (num) => {
    console.log("Running slow calculation...");
    // for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const expensiveDouble = useMemo(() => {
    return double(count);
  }, [count]);

  return (
    <div>
      <p>double : {expensiveDouble}</p>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
      <input
        type="text"
        value={inputVal}
        className="input"
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default Memo;
