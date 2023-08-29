import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src="logo.jpg" alt="Skillmates Logo" />
        <h1>SkillMates</h1>
      </div>
      <div className="diff">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <SearchBar />
      </div>
    </header>
  );
};

export default Header;
