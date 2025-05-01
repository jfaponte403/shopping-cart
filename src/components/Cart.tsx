import { useState } from "react";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        🛒 Cart
      </button>

      {isOpen && (
        <div className="cart-panel">
          <h2>Your Cart</h2>
          <p>No items in cart.</p>
        </div>
      )}
    </>
  );
}
