import { createContext, ReactNode, useContext } from 'react';
import { Cart, useCart } from '../hooks/useCart.tsx';
import { IProduct } from '../types/IProduct.ts';

interface CartContextType {
  cart: Cart;
  addToCart: (product: IProduct) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
