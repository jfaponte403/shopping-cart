import { useContext } from 'react';
import { FiltersContext } from '../context/filters.tsx';
import { IProduct } from '../types/IProduct.ts';

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersContextProvider');
  }
  const { filters, setFilters } = context;

  const filterProducts = (products: IProduct[]) => {
    return products.filter(product => {
      const matchesMin = filters.minPrice === 0 || product.price >= filters.minPrice;
      const matchesMax = filters.maxPrice === 0 || product.price <= filters.maxPrice;
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      return matchesMin && matchesMax && matchesCategory;
    });
  };

  return { filters, filterProducts, setFilters };
}