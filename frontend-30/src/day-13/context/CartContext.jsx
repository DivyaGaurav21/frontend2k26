import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const isInCart = (product) => {
    return cartItem.find((item) => item.id === product.id);
  };
  const cartHandler = (product, type = "add") => {
    if (!isInCart(product)) {
      setCartItem((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCartItem((prev) =>
        prev
          .map((item) =>
            item.id === product.id
              ? {
                  ...product,
                  quantity:
                    type === "decrese" ? item.quantity - 1 : item.quantity + 1,
                }
              : item,
          )
          .filter((item) => item.quantity > 0),
      );
    }
  };
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        isInCart,
        cartHandler,
        cartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext(CartContext);
};
