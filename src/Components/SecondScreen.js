import React from "react";
import { Row } from "react-bootstrap";
import "../Styles/SecondScren.scss";
function SecondScreen() {
  return (
    <div className=" secondControl pb-md-5 pb-sm-4 pb-3" >
      <div className="secondHead" id="action1"> Your eCommerce made simple</div>

      <div className="imageCards">
        <div className="d-flex flex-row manageContennt">
          <div className="manageCard">
            <img src="firstCard.png" alt="first" className="firstCard" />
            <div className="d-flex flex-column">
              <h4>All You Need to Start</h4>
              <p className="">
                Add WooCommerce plugin to any WordPress site and set up a new
                store in minutes.
              </p>
              <a className="cursorClass">
                Ecommerce for Wordpress › 
              </a>
            </div>
          </div>
          <div className="manageSecond">
            <img src="secondCard.png" alt="first" className="secondCard" />
            <div className="d-flex flex-column">
              <h4>Customize and Extend</h4>
              <p className="">
                From subscriptions to gym classes to luxury cars, WooCommerce is
                fully customizable.
              </p>
              <a className="cursorClass">
                <b>Browse Extensions ›</b> 
              </a>
            </div>
          </div>
          <div className="managethird">
            <img src="thricard.png" alt="first" className="thirdCard" />
             <div className="d-flex flex-column">
              <h4>Active Community</h4>
              <p className="">
              WooCommerce is one of the fastest-growing eCommerce communities. 
              </p>
              <a className="cursorClass">
                <b>Check our Forums ›</b> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondScreen;
