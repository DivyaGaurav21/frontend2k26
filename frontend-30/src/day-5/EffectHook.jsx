// 🔍 Kaise test kare?
// App run karo
// Console open karo
// "Timer running..." print ho raha hoga
// Button click karo → component hide (unmount) ho jayega

// 👉 BUT 😬
// Console me "Timer running..." still print hota rahega

// 🚨 Kya ho raha hai?
// Component gayab ho gaya ❌
// But interval chal raha hai ✅

// 👉 Ye hi:

// Memory leak
// Background work
// Bug


import React, { useState, useEffect } from "react";

function Timer() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    // return () => {
    //   console.log("Cleanup called");
    //   clearInterval(id);
    // };

    return () => {
      console.log("Cleanup called");
      clearInterval(id);
    };

  }, []);

  return <h2>Timer Component</h2>;
}

function EffectHook() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Component</button>

      {show && <Timer />}
    </div>
  );
}

export default EffectHook;
