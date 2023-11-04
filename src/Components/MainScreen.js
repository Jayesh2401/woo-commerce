import React from "react";
import { Container, Row } from "react-bootstrap";
import "../Styles/MainScreen.scss";
function MainScreen() {
  return (
    <div className="MainScreenControl">
      {/* <Container className='border border-dark'> */}
      <Row className="p-0">
        <div className="col-sm-6  paddTop">
          <p className="ManageTitle">
            Building exactly the eCommerce website you want.
          </p>
          <p className="MainDesc">
            WooCommerce is a customizable, open-source eCommerce platform built
            on WordPress. Get started quickly and make your way.
          </p>
          <div className='d-flex MainButton'>

          <button className="rounded-5 p-md-3 p-2 MainButton">
            Start a New Store
          </button>
          <a className="ps-md-3 ps-sm-1 p-md-3 p-2 ms-1" href="#">
          or  Customize & Extend  ›
          </a>
          </div>
        </div>
        <div className="col-sm-6 d-sm-block d-none">
        <div className="Wclass"></div>

          {/* <img src="W.png" alt="backW" className="Wclass" /> */}
          <div className="adjustP">
          <img src="sideimg.png" alt="Bigdish" className="image_homeScreen" />
          </div>
        </div>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default MainScreen;
