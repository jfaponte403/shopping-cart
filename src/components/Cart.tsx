import { useState } from 'react';
import { useCartContext } from '../context/cartContext.tsx';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, addItem, removeItem } = useCartContext();

  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        🛒 Cart
      </button>

      {isOpen && (
        <div className="cart-panel">
          <h2 className="cart-title">Your Cart</h2>
          {cart.products.length > 0 ? (
            <div className="cart-items">
              {cart.products.map((item) => (
                <div key={item.product.id} className="cart-item">
                  <img className="cart-item-thumbnail" src={item.product.thumbnail} alt={item.product.title} />

                  <div className="cart-item-details">
                    <div className="cart-item-title">{item.product.title}</div>
                    <div className="cart-item-price">${item.product.price}</div>
                    <div className="cart-item-quantity-controls">
                      <button
                        className="cart-item-btn cart-item-btn-remove"
                        onClick={() => {
                          removeItem(item.product);
                        }}
                      >
                        −
                      </button>
                      <span className="cart-item-quantity">{item.quantity}</span>
                      <button
                        className="cart-item-btn cart-item-btn-add"
                        onClick={() => {
                          addItem(item.product);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="cart-empty">No items in cart.</p>
          )}
        </div>
      )}
    </>
  );
}