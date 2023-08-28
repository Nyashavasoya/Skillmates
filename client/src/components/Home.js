import React from 'react';
import './Home.css';
// import { Link } from 'react-router-dom';
import Slider from './Slider';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
        <Header />
      <header >
        <h1 className='h1'>Welcome to SkillMates</h1>
        <p className='p'>Hey There!!</p>
      </header>
      <nav className='nav'>
        <a className='a' onClick={()=>{navigate("/login")}}>Login</a>
        <a className='a' onClick={()=>{navigate("/register")}}>Sign Up</a>
      </nav>
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;