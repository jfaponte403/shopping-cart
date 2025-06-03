import { useState } from 'react';
import { IProduct } from '../types/IProduct.ts';

export interface CartItem {
  product: IProduct;
  quantity: number;
}

export interface Cart {
  products: CartItem[];
}

const cartInitialState: Cart = {
  products: [],
};

export function useCart() {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  // Adds a product to the cart or increases quantity by 1 if it exists
  const addToCart = (product: IProduct) => {
    setCart((prevCart) => {
      const existingItem = prevCart.products.find(item => item.product.id === product.id);

      if (existingItem) {
        return {
          ...prevCart,
          products: prevCart.products.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...prevCart,
          products: [...prevCart.products, { product, quantity: 1 }],
        };
      }
    });
  };

  // Increases the quantity of an item in the cart by 1
  const addItem = (product: IProduct) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: prevCart.products.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    });
  };

  // Removes one quantity of an item, or removes the item if quantity becomes 0
  const removeItem = (product: IProduct) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: prevCart.products
          .map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };
    });
  };

  return { cart, addToCart, removeItem, addItem };
}