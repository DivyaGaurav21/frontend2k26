import React, { useEffect, useState } from "react";

const Throttle = () => {
  const [count, setCount] = useState(0);

  function scrollEvent() {
    setCount((prev) => prev + 1);
  }

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

  const throttleFn = throttle(scrollEvent, 1000);

  useEffect(() => {
    window.addEventListener("scroll", throttleFn);
    return () => window.removeEventListener("scroll", throttleFn);
  }, []);

  return (
    <div>
      <p className="count">Count: {count}</p>
      <div style={{ height: "2000px" }}></div>
    </div>
  );
};

export default Throttle;
