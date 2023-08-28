import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to SkillMates</h1>
        <p>Hey There!!</p>
      </header>
      <nav>
        <a href="/login.js">Login</a>
        <a href="/register.js">Sign Up</a>
      </nav>
      <Slider />
    </div>
  );
};

export default Home;