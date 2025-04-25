import './App.css';
import { Products } from './components/Products.tsx';
import APIProducts from './mocks/products.json';
import { useState } from 'react';
import { IProduct } from './types/IProduct.ts';

function App() {
  const [products, setProducts] = useState<IProduct[]>(APIProducts.products);
  const [filter, setFilter] = useState({
    category: 'ALL',
    minPrice: 0,
  });

  const filterProducts = (productsList: IProduct[]) => {
    return productsList.filter(
      (product: IProduct) =>
        product.price >= filter.minPrice &&
        (filter.category === 'ALL' || product.category === filter.category)
    );
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <h1>Shopping Cart</h1>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
