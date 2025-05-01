import { Products } from './components/Products.tsx';
import { Header } from './components/Header.tsx';
import { useFilters } from './hooks/useFilters.tsx';
import { products } from './mocks/products.json'

function App() {

  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(products)

  return (
    <>
        <Header />
        <Products products={productsFiltered} />
    </>
  );
}

export default App;
