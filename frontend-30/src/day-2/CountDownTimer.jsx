// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const CountDownTimer = () => {
//   const [count, setCount] = useState(10);
//   const timerRef = useRef(null);

//   function startTimer() {
//     if (timerRef.current) return;
//     timerRef.current = setInterval(() => {
//       setCount((prev) => {
//         if (prev == 0) {
//           clearInterval(timerRef.current);
//           timerRef.current = null;
//           alert("time's Up");
//           return 0;
//         } else {
//           return prev - 1;
//         }
//       });
//     }, 1000);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={startTimer}>Start</button>
//     </div>
//   );
// };

// export default CountDownTimer;

import React, { useEffect, useState } from "react";

const CountDownTimer = ({ initialTime = 10 }) => {
  const [count, setCount] = useState(initialTime);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;
    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          alert("time up");
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [start]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setStart(true)}>Start</button>
    </div>
  );
};

export default CountDownTimer;
