// import React from "react";
// import "./App.css";
// import CounterExample from "./day-7/contextAPI/c1/component/CounterExample";
// import CountContextProvider from "./day-7/contextAPI/c1/context/CounterContext";


// const App = () => {
//   return (
//     <div>
//       <CountContextProvider>
//         <CounterExample />
//       </CountContextProvider>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import "./App.css";
import Home from './day-7/contextAPI/c2/components/Home';
import AuthContextProvider from './day-7/contextAPI/c2/auth-context/AuthContext';
import UseDropDown from './day-7/UseDropDown';
import DarkLightTheme from './day-1/DarkLightTheme';

const App = () => {
  return (
    <AuthContextProvider>
      {/* <Home/> */}
      {/* <UseDropDown /> */}
      <DarkLightTheme/>
    </AuthContextProvider>
  )
}

export default App
