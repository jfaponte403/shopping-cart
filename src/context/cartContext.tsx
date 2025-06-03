import { createContext, ReactNode, useContext } from 'react';
import { Cart, useCart } from '../hooks/useCart.tsx';
import { IProduct } from '../types/IProduct.ts';

// Define the context type
interface CartContextType {
  cart: Cart;
  addToCart: (product: IProduct) => void;
  removeItem: (product: IProduct) => void;
  addItem: (product: IProduct) => void;
}

// Create the context with an undefined default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { cart, addToCart, removeItem, addItem } = useCart();

  // Make sure to provide the correct value object
  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
}