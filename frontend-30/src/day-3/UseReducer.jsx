import React from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  console.log(state, "react");
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch({ type: "dec" })}>DEC</button>
      <button onClick={() => dispatch({ type: "inc" })}>INC</button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
    </div>
  );
};

export default UseReducer;
