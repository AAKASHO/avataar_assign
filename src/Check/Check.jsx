import React, { useState, useEffect, useRef } from 'react';
import './Check.scss';

const Check = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: '../assets/images/img_1.png',
      name: 'Norwegian Mountains',
    },
    {
      id: 2,
      image: '../assets/images/img_2.png',
      name: 'Animated Scenery',
    },
    {
      id: 3,
      image: '../assets/images/img_3.png',
      name: 'Kirkjufell ,Hill in Iceland',
    },
    {
      id: 4,
      image: '../assets/images/img_4.png',
      name: 'Plitvice Lakes',
    },
    {
      id: 5,
      image: '../assets/images/img_11.avif',
      name: 'Seljalandsfoss,Waterfall in Iceland',
    },
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) { // Left arrow key
        handlePrevSlide();
      } else if (event.keyCode === 39) { // Right arrow key
        handleNextSlide();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleCardClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    console.log("touch");
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        
        handlePrevSlide();
      } else if (deltaX < -50) {
        handleNextSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className='mainpage'>
      <div className='text1'>Featured Products</div>
      <div className='text2'>Explore and discover a variety of products</div>

      <section
        id="slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <input key={slide.id} type="radio" id={`s${index + 1}`} checked={currentSlide === index} />
        ))}
        {slides.map((slide, index) => (
          <label key={slide.id} htmlFor={`s${index + 1}`} id={`slide${index + 1}`} dataName={slide.name} onClick={() => handleCardClick(index)} />
        ))}
      </section>

      <div id="nav-dots">
        {slides.map((slide, index) => (
          <label key={slide.id} htmlFor={`s${index + 1}`} dataName={slide.name} className={currentSlide === index ? 'active' : ''} onClick={() => handleCardClick(index)} />
        ))}
      </div>

      <div id="arrows">
        <label className="prev" onClick={handlePrevSlide}>&#10094;</label>
        <label className="next" onClick={handleNextSlide}>&#10095;</label>
      </div>
    </div>
  );
};

export default Check;
