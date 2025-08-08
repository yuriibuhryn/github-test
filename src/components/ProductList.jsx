import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
