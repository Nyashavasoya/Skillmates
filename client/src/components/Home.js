import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
import Slider from './Slider';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
        <Header />
      <header>
        <h1>Welcome to SkillMates</h1>
        <p>Hey There!!</p>
      </header>
      <nav>
        <a href="/login.js">Login</a>
        <a href="/register.js">Sign Up</a>
      </nav>
      <Slider /> 
      <Footer />
    </div>
  );
};

export default Home;