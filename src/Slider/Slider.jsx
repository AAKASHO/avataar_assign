import React, { useState, useEffect } from 'react';
import './Slider.scss';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1));


  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1));
  };

  useEffect(() => {
    let sliderInterval;
    if (!isHovered) {
      sliderInterval = setInterval(() => {
        nextSlide();
      }, 2000); // Change slide every 3 seconds (adjust as needed)
    }
    return () => clearInterval(sliderInterval);
  }, [currentIndex, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-slide"
            style={{
              transform: `rotateY(${(index - currentIndex) * (360 / images.length)}deg) translateZ(100px)`,
              zIndex: `${index+images.length*(Math.floor(currentIndex/images.length)) === currentIndex ? images.length + 1 : index}`
            }}
          >

            <img src={image} alt={`Slide ${index + 1}`} />
            <br />
            <div>

            {index}
            <div>
            {currentIndex}

            </div>
            <div>
            {index+images.length*(Math.floor(currentIndex/images.length)) === currentIndex ? images.length + 1 : index}

            </div>
            <div>
            {index+images.length*(Math.floor(currentIndex/images.length))}

            </div>

            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;
