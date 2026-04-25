import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CountContextProvider");
  }
  const { counter, setCounter } = context;
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);
  return { counter, increment, decrement, reset };
};
