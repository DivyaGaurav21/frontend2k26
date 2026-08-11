import React from "react";
import EcomCartMcContext from "./day-13/EcomCartMcContext";
import { CartProvider } from "./day-13/context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <EcomCartMcContext/>
    </CartProvider>
  );
};

export default App;
