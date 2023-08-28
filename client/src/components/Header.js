import React from 'react';
import './Header.css'; // Import the CSS file for header styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
