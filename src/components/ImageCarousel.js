import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel() {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      interval={3000}
    >
      <div>
        <img src="/img/f1.jpg" alt="Imagen 1" style={{ maxHeight: '150px', objectFit: 'contain' }}/>
      </div>
      <div>
        <img src="/img/fallout.jpg" alt="Imagen 2" style={{ maxHeight: '150px', objectFit: 'contain' }}/>
      </div>
      <div>
        <img src="/img/odst.jpg" alt="Imagen 3" style={{ maxHeight: '150px', objectFit: 'contain' }}/>
      </div>
    </Carousel>
  );
}
