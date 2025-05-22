import { IProduct } from '../types/IProduct.ts';
import { useCartContext } from '../context/cartContext.tsx';

interface ProductsProps {
  products: IProduct[];
}

export function Products({ products }: ProductsProps) {

  const { addToCart } = useCartContext();

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              {product.title} - ${product.price}
            </div>
            <div>
              <button
                onClick={() => {
                  console.log(product);
                  addToCart(product);
                }}
              >
                {' '}
                🛒
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
