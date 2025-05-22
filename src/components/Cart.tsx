import { useState } from "react";
import { useCartContext } from '../context/cartContext.tsx';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCartContext();


  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        🛒 Cart
      </button>

      {isOpen && (
        <div className="cart-panel">
          { cart.products.length > 0 &&
            (<div>
              {cart.products.map(product => (
                <div key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  {product.title} - ${product.price}
                </div>
              ))}
            </div>)
          }
          <h2>Your Cart</h2>
          <p>No items in cart.</p>
        </div>
      )}
    </>
  );
}
