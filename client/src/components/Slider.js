import React, { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Discover Our Website',
      content: 'Welcome to SkillMates, your platform for connecting with fellow college students to share knowledge, achievements, and learn together. Join our vibrant community to explore various skills, collaborate on projects, and participate in exciting hackathons!',
    },
    {
      title: 'Join Our Community',
      content: 'Connect with like-minded students, form study groups, collaborate on projects, and enhance your learning experience. Our platform empowers you to reach out to others and create meaningful connections.',
    },
    {
        title: 'Unlock Your Potential',
        content: 'Whether you\'re looking to learn a new skill, showcase your achievements, or join hackathons, SkillMates has got you covered. With a diverse range of profiles and opportunities, you can unlock your full potential.',
    }

  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        <div className="slider-item">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].content}</p>
        </div>
        <div className="cta-buttons">
          <button className="cta-button" onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
