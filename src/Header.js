import React from 'react';
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/content" className="nav-link">Content</Link>
      </nav>
    </header>
  );
}

export default Header;
