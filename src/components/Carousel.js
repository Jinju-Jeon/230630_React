import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './components.scss'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/images/main1.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/images/main2.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/images/main3.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/images/main4.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL+'/images/main5.jpg'}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;