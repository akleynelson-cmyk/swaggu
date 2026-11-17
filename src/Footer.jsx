import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2>SWAGGU</h2>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/collections">Collection</Link>
      </div>

      <p>© 2026 SWAGGU. All rights reserved.</p>
    </footer>
  );
}

export default Footer;