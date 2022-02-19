import React from 'react';
import "./CoverPage.css";
import { Carousel } from 'react-bootstrap';
function CoverPage() {
  return (
    <>
      <div className='caro-outer'>
        <Carousel className='caro'>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={require("./Images/i1.jpg")}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={require("./Images/i2.jpg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./Images/i3.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./Images/i4.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./Images/i5.jpg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='quote-quote'>
        Hiiiiiiiiiiiiiiiiiiii
      </div>
    </>
  );
}

export default CoverPage;
