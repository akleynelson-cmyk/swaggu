 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Collections from './collections.jsx';
import Cart from './Cart.jsx';
import { WishlistProvider } from './WishlistContext.jsx';
import { CartProvider } from './CartContext.jsx';

import './App.css';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
