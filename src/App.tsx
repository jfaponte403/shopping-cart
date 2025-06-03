import { Products } from './components/Products.tsx';
import { Header } from './components/Header.tsx';
import { useFilters } from './hooks/useFilters.tsx';
import { products } from './mocks/products.json';
import { CartContextProvider } from './context/cartContext.tsx';

function App() {
  const { filterProducts, setFilters } = useFilters();
  const productsFiltered = filterProducts(products);

  return (
    <>
      <CartContextProvider>
        <Header onFilterChange={setFilters} />
        <Products products={productsFiltered} />
      </CartContextProvider>
    </>
  );
}

export default App;