import { useContext } from 'react';
import { FiltersContext } from '../context/filters.tsx';
import { IProduct } from '../types/IProduct.ts';

export function useFilters() {
  const {filters, setFilters} = useContext(FiltersContext)!;

  const filterProducts = (products: IProduct[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
