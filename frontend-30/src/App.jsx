import React from "react";
import AutocompleteSearch from "./day-11/AutocompleteSearch";
// import "./App.css";
// import ReduxEcom from "./day-10/ReduxEcom";
// import appStore from "./day-10/redux/store";
// import { Provider } from "react-redux";
// import Practice from "./Practice";
// import Input from "./day-11/Input";

const App = () => {
  return (
    <div>
      {/* <Provider store={appStore}>
        <ReduxEcom />
      </Provider> */}
      {/* <Input fieldName="test" type="text"  placeholder="test" className="h-8" /> */}
      {/* <Practice /> */}
      <AutocompleteSearch/>
    </div>
  );
};

export default App;
