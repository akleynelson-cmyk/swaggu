 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faHeart,
  faXmark
} from '@fortawesome/free-solid-svg-icons';

import { useCart } from './CartContext.jsx';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const hideNavbar =
    location.pathname === '/collections' && scrolled;

  const menuItems = [
    { name: 'HOME', link: '/' },
    { name: 'SHOES', link: '/collections#shoes' },
    { name: 'TOPS', link: '/collections#tops' },
    { name: 'OUTERWEAR', link: '/collections#outerwear' },
    { name: 'BOTTOMS', link: '/collections#bottoms' }
  ];

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${
          hideNavbar ? 'navbar-hidden' : ''
        }`}
      >
        {/* LEFT SECTION */}
        <div className="navbar-left">
          <button
            className="menu-action"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FontAwesomeIcon icon={faBars} />
            <span>Menu</span>
          </button>

          <div className="desktop-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span>Search</span>
          </div>
        </div>

        {/* CENTRED LOGO */}
        <div className="brand-logo">
          <h1 onClick={() => navigate('/')}>SWAGGU</h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-right">
          <button
            className="mobile-search"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>

          <button
            className="cart-action"
            onClick={() => navigate('/cart')}
            aria-label={`Open cart, ${cartCount} items`}
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className="cart-icon"
            />

            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </button>
        </div>
      </nav>

      {/* DARK OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SLIDING MENU */}
      <aside className={`side-menu ${menuOpen ? 'active' : ''}`}>
        <div className="side-menu-header">
          <h2>SWAGGU</h2>

          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="side-menu-links">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* MOBILE-ONLY LINKS */}
          <div className="mobile-menu-extras">
            <a
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span>WISHLIST</span>
            </a>

            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>LOGIN / SIGN UP</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
