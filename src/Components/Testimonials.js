import React, { useState } from "react";
import CustomSlider from "./customSlider";
import "../Styles/Testimonials.scss";
function Testimonials() {
  const [slideDirection, setSlideDirection] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [counter, setCounter] = useState(1);

  const data = {
    image1: "testiFirst.png",
    image2: "testifive.png",
    image3: "testisix.png",
    image4: "testisecond.png",
    image5: "testifoour.png",
    image6: "testithird.png",
  };

  const handleSlide = (direction) => {
    setSlideDirection(direction);
    if (slideDirection === "prev" && slideNumber > 0) {
      setSlideNumber((prev) => prev - 1);
    }
    if (slideDirection === "next" && slideNumber < 1) {
      setSlideNumber((prev) => prev + 1);
    }
  };

  return (
    <div className="main">
      <div className="testimonial">
        <div className="header">
          <div className="heading " id="action3">
            Trusted by Agencies & Store Owner
          </div>
        </div>
        <div className="testim">
          <div className="leftImages">
            {counter === 1 ? (
              <>
                <img
                  className="ellipse9 image"
                  src="testisix.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse6 image"
                  src="testifive.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse14 image"
                  src="testiFirst.png"
                  alt="ellipse"
                />
              </>
            ) : counter === 2 ? (
              <>
                <img
                  className="ellipse9 image"
                  src="testifive.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse6 image"
                  src="testiFirst.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse14 image"
                  src="testisix.png"
                  alt="ellipse"
                />
              </>
            ) : (
              <>
                <img
                  className="ellipse9 image"
                  src="testiFirst.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse6 image"
                  src="testisix.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse14 image"
                  src="testifive.png"
                  alt="ellipse"
                />
              </>
            )}
          </div>
          <div className="slider">
            <CustomSlider
              direction={slideDirection}
              slideNumber={slideNumber}
            />
          </div>
          <div className="slideController">
            {counter > 1 ? (
              <button
                className="arrow"
                onClick={() => {
                  handleSlide("prev");
                  setCounter(counter === 1 ? 1 : counter - 1);
                }}
              >
                {/* <svg
                width="5vw"
                height="1.5vw"
                viewBox="0 0 32 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.08689 0.915654C8.21994 0.97086 8.34078 1.05177 8.4425 1.15375C8.54449 1.25548 8.6254 1.37632 8.6806 1.50936C8.73581 1.64241 8.76423 1.78503 8.76423 1.92907C8.76423 2.07312 8.73581 2.21574 8.6806 2.34878C8.6254 2.48183 8.54449 2.60267 8.4425 2.70439L3.74066 7.40447H30.6344C30.9248 7.40447 31.2034 7.51984 31.4087 7.72521C31.6141 7.93058 31.7295 8.20912 31.7295 8.49955C31.7295 8.78999 31.6141 9.06853 31.4087 9.2739C31.2034 9.47926 30.9248 9.59464 30.6344 9.59464H3.74059L8.4425 14.2948C8.64813 14.5004 8.76365 14.7793 8.76365 15.0701C8.76365 15.3609 8.64813 15.6398 8.4425 15.8454C8.23688 16.051 7.95799 16.1666 7.66718 16.1666C7.37638 16.1666 7.09749 16.051 6.89186 15.8454L0.32135 9.27491C0.21937 9.17318 0.138458 9.05234 0.083252 8.9193C0.0280457 8.78625 -0.000371933 8.64363 -0.000371933 8.49959C-0.000371933 8.35555 0.0280457 8.21292 0.083252 8.07988C0.138458 7.94683 0.21937 7.82599 0.32135 7.72427L6.89186 1.15375C6.99359 1.05177 7.11443 0.97086 7.24747 0.915654C7.38052 0.860447 7.52314 0.832031 7.66718 0.832031C7.81123 0.832031 7.95385 0.860447 8.08689 0.915654Z"
                  fill="black"
                />
              </svg> */}
                <svg
                  className="nextR"
                  width="5vw"
                  height="1.5vw"
                  viewBox="0 0 52 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.5445 0.135842C38.3276 0.225846 38.1306 0.357756 37.9648 0.524017C37.7985 0.689858 37.6666 0.886871 37.5766 1.10377C37.4866 1.32067 37.4402 1.5532 37.4402 1.78803C37.4402 2.02286 37.4866 2.25539 37.5766 2.47228C37.6666 2.68918 37.7985 2.8862 37.9648 3.05204L45.6302 10.7146H1.78533C1.31183 10.7146 0.857724 10.9027 0.52291 11.2375C0.188097 11.5724 0 12.0265 0 12.5C0 12.9735 0.188097 13.4276 0.52291 13.7624C0.857724 14.0972 1.31183 14.2853 1.78533 14.2853H45.6303L37.9648 21.9479C37.6295 22.2832 37.4412 22.7378 37.4412 23.2119C37.4412 23.686 37.6295 24.1407 37.9648 24.4759C38.3 24.8112 38.7547 24.9995 39.2288 24.9995C39.7029 24.9995 40.1575 24.8112 40.4928 24.4759L51.2047 13.764C51.371 13.5981 51.5029 13.4011 51.5929 13.1842C51.6829 12.9673 51.7292 12.7348 51.7292 12.5C51.7292 12.2651 51.6829 12.0326 51.5929 11.8157C51.5029 11.5988 51.371 11.4018 51.2047 11.236L40.4928 0.524017C40.3269 0.357756 40.1299 0.225846 39.913 0.135842C39.6961 0.0458387 39.4636 -0.000488281 39.2288 -0.000488281C38.9939 -0.000488281 38.7614 0.0458387 38.5445 0.135842Z"
                    fill="black"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="arrow"
                onClick={() => {
                  // handleSlide("prev");
                  setCounter(counter === 1 ? 1 : counter - 1);
                }}
              >
                {/* <svg
                width="5vw"
                height="1.5vw"
                viewBox="0 0 32 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.08689 0.915654C8.21994 0.97086 8.34078 1.05177 8.4425 1.15375C8.54449 1.25548 8.6254 1.37632 8.6806 1.50936C8.73581 1.64241 8.76423 1.78503 8.76423 1.92907C8.76423 2.07312 8.73581 2.21574 8.6806 2.34878C8.6254 2.48183 8.54449 2.60267 8.4425 2.70439L3.74066 7.40447H30.6344C30.9248 7.40447 31.2034 7.51984 31.4087 7.72521C31.6141 7.93058 31.7295 8.20912 31.7295 8.49955C31.7295 8.78999 31.6141 9.06853 31.4087 9.2739C31.2034 9.47926 30.9248 9.59464 30.6344 9.59464H3.74059L8.4425 14.2948C8.64813 14.5004 8.76365 14.7793 8.76365 15.0701C8.76365 15.3609 8.64813 15.6398 8.4425 15.8454C8.23688 16.051 7.95799 16.1666 7.66718 16.1666C7.37638 16.1666 7.09749 16.051 6.89186 15.8454L0.32135 9.27491C0.21937 9.17318 0.138458 9.05234 0.083252 8.9193C0.0280457 8.78625 -0.000371933 8.64363 -0.000371933 8.49959C-0.000371933 8.35555 0.0280457 8.21292 0.083252 8.07988C0.138458 7.94683 0.21937 7.82599 0.32135 7.72427L6.89186 1.15375C6.99359 1.05177 7.11443 0.97086 7.24747 0.915654C7.38052 0.860447 7.52314 0.832031 7.66718 0.832031C7.81123 0.832031 7.95385 0.860447 8.08689 0.915654Z"
                  fill="black"
                />
              </svg> */}
                <svg
                  className="nextR O"
                  width="5vw"
                  height="1.5vw"
                  viewBox="0 0 52 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.5445 0.135842C38.3276 0.225846 38.1306 0.357756 37.9648 0.524017C37.7985 0.689858 37.6666 0.886871 37.5766 1.10377C37.4866 1.32067 37.4402 1.5532 37.4402 1.78803C37.4402 2.02286 37.4866 2.25539 37.5766 2.47228C37.6666 2.68918 37.7985 2.8862 37.9648 3.05204L45.6302 10.7146H1.78533C1.31183 10.7146 0.857724 10.9027 0.52291 11.2375C0.188097 11.5724 0 12.0265 0 12.5C0 12.9735 0.188097 13.4276 0.52291 13.7624C0.857724 14.0972 1.31183 14.2853 1.78533 14.2853H45.6303L37.9648 21.9479C37.6295 22.2832 37.4412 22.7378 37.4412 23.2119C37.4412 23.686 37.6295 24.1407 37.9648 24.4759C38.3 24.8112 38.7547 24.9995 39.2288 24.9995C39.7029 24.9995 40.1575 24.8112 40.4928 24.4759L51.2047 13.764C51.371 13.5981 51.5029 13.4011 51.5929 13.1842C51.6829 12.9673 51.7292 12.7348 51.7292 12.5C51.7292 12.2651 51.6829 12.0326 51.5929 11.8157C51.5029 11.5988 51.371 11.4018 51.2047 11.236L40.4928 0.524017C40.3269 0.357756 40.1299 0.225846 39.913 0.135842C39.6961 0.0458387 39.4636 -0.000488281 39.2288 -0.000488281C38.9939 -0.000488281 38.7614 0.0458387 38.5445 0.135842Z"
                    fill="black"
                  />
                </svg>
              </button>
            )}
            {counter < 3 ? (
              <button
                className="arrow ms-sm-2 ms-4"
                onClick={() => {
                  handleSlide("next");
                  setCounter(counter < 3 ? counter + 1 : 3);
                }}
              >
                <svg
                  className="next"
                  width="5vw"
                  height="1.5vw"
                  viewBox="0 0 52 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.5445 0.135842C38.3276 0.225846 38.1306 0.357756 37.9648 0.524017C37.7985 0.689858 37.6666 0.886871 37.5766 1.10377C37.4866 1.32067 37.4402 1.5532 37.4402 1.78803C37.4402 2.02286 37.4866 2.25539 37.5766 2.47228C37.6666 2.68918 37.7985 2.8862 37.9648 3.05204L45.6302 10.7146H1.78533C1.31183 10.7146 0.857724 10.9027 0.52291 11.2375C0.188097 11.5724 0 12.0265 0 12.5C0 12.9735 0.188097 13.4276 0.52291 13.7624C0.857724 14.0972 1.31183 14.2853 1.78533 14.2853H45.6303L37.9648 21.9479C37.6295 22.2832 37.4412 22.7378 37.4412 23.2119C37.4412 23.686 37.6295 24.1407 37.9648 24.4759C38.3 24.8112 38.7547 24.9995 39.2288 24.9995C39.7029 24.9995 40.1575 24.8112 40.4928 24.4759L51.2047 13.764C51.371 13.5981 51.5029 13.4011 51.5929 13.1842C51.6829 12.9673 51.7292 12.7348 51.7292 12.5C51.7292 12.2651 51.6829 12.0326 51.5929 11.8157C51.5029 11.5988 51.371 11.4018 51.2047 11.236L40.4928 0.524017C40.3269 0.357756 40.1299 0.225846 39.913 0.135842C39.6961 0.0458387 39.4636 -0.000488281 39.2288 -0.000488281C38.9939 -0.000488281 38.7614 0.0458387 38.5445 0.135842Z"
                    fill="black"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="arrow ms-sm-2 ms-4"
                onClick={() => {
                  handleSlide("next");
                  setCounter(counter < 3 ? counter + 1 : 3);
                }}
              >
                <svg
                  className="next O"
                  width="5vw"
                  height="1.5vw"
                  viewBox="0 0 52 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.5445 0.135842C38.3276 0.225846 38.1306 0.357756 37.9648 0.524017C37.7985 0.689858 37.6666 0.886871 37.5766 1.10377C37.4866 1.32067 37.4402 1.5532 37.4402 1.78803C37.4402 2.02286 37.4866 2.25539 37.5766 2.47228C37.6666 2.68918 37.7985 2.8862 37.9648 3.05204L45.6302 10.7146H1.78533C1.31183 10.7146 0.857724 10.9027 0.52291 11.2375C0.188097 11.5724 0 12.0265 0 12.5C0 12.9735 0.188097 13.4276 0.52291 13.7624C0.857724 14.0972 1.31183 14.2853 1.78533 14.2853H45.6303L37.9648 21.9479C37.6295 22.2832 37.4412 22.7378 37.4412 23.2119C37.4412 23.686 37.6295 24.1407 37.9648 24.4759C38.3 24.8112 38.7547 24.9995 39.2288 24.9995C39.7029 24.9995 40.1575 24.8112 40.4928 24.4759L51.2047 13.764C51.371 13.5981 51.5029 13.4011 51.5929 13.1842C51.6829 12.9673 51.7292 12.7348 51.7292 12.5C51.7292 12.2651 51.6829 12.0326 51.5929 11.8157C51.5029 11.5988 51.371 11.4018 51.2047 11.236L40.4928 0.524017C40.3269 0.357756 40.1299 0.225846 39.913 0.135842C39.6961 0.0458387 39.4636 -0.000488281 39.2288 -0.000488281C38.9939 -0.000488281 38.7614 0.0458387 38.5445 0.135842Z"
                    fill="black"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="rightImages">
            {counter === 1 ? (
              <>
                <img
                  className="ellipse10 image"
                  src="testisecond.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse11 image"
                  src="testifoour.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse5 image"
                  src="testithird.png"
                  alt="ellipse"
                />
              </>
            ) : counter === 2 ? (
              <>
              <img
                className="ellipse10 image"
                src="testithird.png"
                alt="ellipse"
              />
              <img
                className="ellipse11 image"
                src="testisecond.png"
                alt="ellipse"
              />
              <img
                className="ellipse5 image"
                src="testifoour.png"
                alt="ellipse"
              />
            </>
            ) : (
              <>
                <img
                  className="ellipse10 image"
                  src="testifoour.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse11 image"
                  src="testithird.png"
                  alt="ellipse"
                />
                <img
                  className="ellipse5 image"
                  src="testisecond.png"
                  alt="ellipse"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
