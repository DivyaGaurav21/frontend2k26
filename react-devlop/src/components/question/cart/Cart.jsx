import React from "react";

const Cart = ({ cartItem }) => {
  const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Cart Items</h2>

      {cartItem.map((item) => (
        <div
          key={item.id}
          className="flex items-center flex-row justify-between gap-4 border p-2 rounded-lg"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-sm font-medium">{item.price}</p>
        </div>
      ))}
      <div className="p-5 bg-amber-200">Total Price : {totalPrice}</div>
    </div>
  );
};

export default Cart;
