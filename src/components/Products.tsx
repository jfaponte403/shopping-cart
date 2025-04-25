interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsProps {
  products: IProduct[];
}

export function Products({ products }: ProductsProps) {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div> {product.title} </div>
            <div>
              <button> 🛒 </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
