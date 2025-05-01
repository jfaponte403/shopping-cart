import { Cart } from './Cart.tsx';
import * as React from 'react';

export function Header() {

  //   Todo; handle the filter form using no control form



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <header className="header">
      <h1 className="title">Shopping Cart</h1>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="price-range">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" />
          <label htmlFor="maxPrice">Max Price</label>
          <input type="number" id="maxPrice" />
        </div>
        <select id="category">
          <option value="all">ALL</option>
          <option value="phones">Phones</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      <Cart />
    </header>
  );
}
