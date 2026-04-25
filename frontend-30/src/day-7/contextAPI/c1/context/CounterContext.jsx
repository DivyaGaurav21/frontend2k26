// import React, { useState, createContext, useContext } from "react";

// const CounterContext = createContext(null);

// const CountContextProvider = ({ children }) => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <CounterContext.Provider value={{ counter, setCounter }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// export const useCounterContext = () => {
//   const context = useContext(CounterContext);
//   if (!context) {
//     throw new Error(
//       "useCounterContext must be used within a CountContextProvider",
//     );
//   }

//   const { counter, setCounter } = context;
//   const increment = () => setCounter((prev) => prev + 1);
//   const decrement = () => setCounter((prev) => prev - 1);
//   const reset = () => setCounter(0);

//   return { counter, increment, decrement, reset };
// };

// export default CountContextProvider;

import React, { useState, createContext } from "react";

export const CounterContext = createContext(null);

const CountContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CountContextProvider

