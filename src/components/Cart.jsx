import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(({ product, quantity }) => (
            <li key={product.id}>
              {product.name} x {quantity} - ${(product.price * quantity).toFixed(2)}
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}
