import React, { useState, useEffect } from 'react';
import './Check.scss';

const Check = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      name: 'Seljalandsfoss,Waterfall in Iceland'
      ,
    },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval);
  // }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
  };

  const handleCardClick = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className='mainpage'>


      <div className='text1'>
            Featured Products
      </div>
      <div className='text2'>
            Explore and discover a variety of products
      </div>

      <section id="slider">
        {slides.map((slide, index) => (
          <input key={slide.id} type="radio" id={`s${index+1}`} checked={currentSlide === index} />
        ))}
        {slides.map((slide, index) => (
            // <img src={slide.image}  />
          <label key={slide.id} htmlFor={`s${index+1}`} id={`slide${index+1}`} dataName={slide.name} onClick={() => handleCardClick(index)}/>
          // </label>
        ))}
      </section>

      <div id="nav-dots">
        {slides.map((slide, index) => (
          // <div>{slide.name}</div>
          <label key={slide.id} htmlFor={`s${index+1}`} dataName={slide.name} className={currentSlide === index ? 'active' : ''} onClick={() => handleCardClick(index)}></label>
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
