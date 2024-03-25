import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Navbar from './Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Slider from './Slider/Slider';
import Check from './Check/Check';


function App() {
  return (
    <div className='outsideContainer'>
    <Navbar className="appnav"/>
    <Check/>
    </div>
  );
}

export default App;