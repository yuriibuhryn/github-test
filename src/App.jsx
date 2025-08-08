import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import Chat from './components/Chat.jsx';
import './App.css';

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/chat">Chat</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}
