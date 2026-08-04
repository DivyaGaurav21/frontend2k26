import React from "react";
import "./App.css";
import ReduxEcom from "./day-10/ReduxEcom";
import appStore from "./day-10/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <ReduxEcom />
      </Provider>
    </div>
  );
};

export default App;
