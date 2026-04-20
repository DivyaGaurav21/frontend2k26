import React from "react";

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  // ✅ total price calculate
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              {/* Image */}
              <img src={item.thumbnail} width={80} alt={item.title} />

              {/* Info */}
              <div style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>

              {/* Quantity controls */}
              <div>
                <button onClick={() => removeFromCart(item)}>-</button>
                <span style={{ margin: "0 10px" }}>
                  {item.quantity}
                </span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

              {/* Subtotal */}
              <div>
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total */}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;