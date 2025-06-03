import { Cart } from './Cart.tsx';
import * as React from 'react';

interface HeaderProps {
  onFilterChange: (filters: { minPrice: number; maxPrice: number; category: string }) => void;
}

export function Header({ onFilterChange }: HeaderProps) {

  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(0);
  const [category, setCategory] = React.useState<string>('all');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilterChange({
      minPrice,
      maxPrice,
      category,
    });
  };

  return (
    <header className="header">
      <h1 className="title">Shopping Cart</h1>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="price-range">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={e => setMinPrice(Number(e.target.value))}
            min={0}
          />
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
            min={0}
          />
        </div>
        <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">ALL</option>
          <option value="phones">Phones</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      {/* Optionally display cart info here */}
      <Cart />
    </header>
  );
}