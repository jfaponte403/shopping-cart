import { IProduct } from '../types/IProduct.ts';

interface ProductsProps {
  products: IProduct[];
}

export function Products({ products }: ProductsProps) {


  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              {' '}
              {product.title} - ${product.price}
            </div>
            <div>
              <button> 🛒</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
