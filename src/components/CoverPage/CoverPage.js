import React from "react";
import "./CoverPage.css";
import { Carousel } from "react-bootstrap";
import Info from "../Info/Info";

function CoverPage() {
  return (
    <>
      <div className="card">
        <div className="info-head">
          <div className="card-header">
            <img className="logo" alt="pic" src={require("./saathlogo.jpeg")} />
            <b className="bold"> Saath Animal Welfare Trust.</b>{" "}
          </div>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>
              Saath Animal Welfare Trust is a non-profiting organisation which
              is run by volunteers. We rescue a variety of animals including
              dogs, cats & etc.
            </p>
          </blockquote>
        </div>
      </div>
      <div className="caro-outer">
        <Carousel className="caro">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={require("./Images/i1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
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

      <Info />
    </>
  );
}

export default CoverPage;




// import React from 'react';
// import "./CoverPage.css";
// import { Carousel } from 'react-bootstrap';
// function CoverPage() {
//   return (
//     <>
//       <div className='caro-outer'>
//         <Carousel className='caro'>
//           <Carousel.Item interval={1000}>
//             <img
//               className="d-block w-100"
//               src={require("./Images/i1.jpg")}
//               alt="First slide"
//             />

//           </Carousel.Item>
//           <Carousel.Item >
//             <img
//               className="d-block w-100"
//               src={require("./Images/i2.jpg")}
//               alt="Second slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require("./Images/i3.jpg")}
//               alt="Third slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require("./Images/i4.jpg")}
//               alt="Third slide"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={require("./Images/i5.jpg")}
//               alt="Third slide"
//             />
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       <div className='quote-quote' style={{ flexWrap: "wrap" }}>
//         <div className='dd'>
//           <img alt='robots' src={`https://robohash.org/${5}?set=set4`} />
//           <div>
//             <h3>hello</h3>
//             <p>billo</p>
//             <p>xyxxxx</p>
//             <p>yjtdsakcvkjsda</p>
//             <button type='submit'>Submit</button>
//           </div>
//         </div>

//         <div className='dd'>
//           <img alt='robots' src={`https://robohash.org/${5}?set=set4`} />
//           <div>
//             <h3>hello</h3>
//             <p>billo</p>
//             <p>xyxxxx</p>
//             <p>yjtdsakcvkjsda</p>
//           </div>
//         </div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//         <div className='dd'>box 1</div>
//       </div>

//     </>
//   );
// }

// export default CoverPage;
