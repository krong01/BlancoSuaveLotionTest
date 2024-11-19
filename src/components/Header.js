import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <nav className="nav-left">
        <ul>
            <li><Link to="/BlancoSuaveLotion">Blanco Suave</Link></li>
        </ul>
      </nav>
      <nav className="nav-right">
        <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/Cart">Cart {cartCount}</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
