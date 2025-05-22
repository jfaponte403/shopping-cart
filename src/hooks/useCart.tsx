import { useState } from 'react';
import { IProduct } from '../types/IProduct.ts';

export interface Cart {
  products: IProduct[];
}

const cartInitialState: Cart = {
  products: [],
};

export function useCart() {
  const [cart, setCart] = useState<Cart>(cartInitialState);

  const addToCart = (product: IProduct) => {
    setCart({
      ...cart,
      products: [...cart.products, product],
    });
  }

  return { cart, addToCart };
}
