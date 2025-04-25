import './App.css';
import { Products } from './components/Products.tsx';
import { products } from './mocks/products.json'

function App() {
  return (
    <>
      <h1>Shopping Cart</h1>
      <Products products={products} />
    </>
  );
}

export default App;
