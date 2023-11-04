import React from "react";
import "../Styles/Footer.scss";
function Footer() {
  return (
    <div className="support">
      <div className="peopleSection">
        <div className="heading " id="action4">Supported by real people</div>
        <div className="smallHeading">
          Our team of Happiness Engineers works remotely from 58 countries
          providing customer support across multiple time zones.
        </div>
        <div className="supportProfile">
          <img src="supportprofile.png" alt="people" />
        </div>
      </div>

      <div className="footerSection">
        <div className="section">
          <div className="text">
            WooCommerce - the
            <span className=" bolder">
              most customizable eCommerce platform
            </span>
            for building <span className=" bolder">your online business</span>.
          </div>
          <button className="getStarted rounded-5 bolder">GET STARTED</button>
          <img className="circleDesg" src="purplesmall.png" alt="circle" />
        </div>

        <div className="footer">
          <ul className="benifits">
            <img src="tick.svg" alt="icon" />
            <li className="benifit">
              30 day <span className="bolder">money back guarantee</span>
            </li>
            <img src="support.svg" alt="icon" />
            <li className="benifit">
              <span>support</span> team across the world
            </li>
            <img src="lock.svg" alt="icon" />
            <li className="benifit">
              <span>safe</span> & secure online payment
            </li>
          </ul>
          <ul className=" d-flex d-sm-none d-block benefitshidd">
            <li className="benifitlist">
              30 day <span className="bolder">money back guarantee</span>
            </li>
            <li className="benifitlist">
              <span>support</span> team across the world
            </li>
            <li className="benifitlist">
              <span>safe</span> & secure online payment
            </li>
          </ul>

          <div className="logo CursorClass">
            <a href="/">
            <img src="logo.svg" alt="logo" />
            </a>
          </div>

          <div className="partition"></div>

          <div className="featureLists" id="action5">
            <ul className="featureList">
              <li className="   bolder listHeading">Who we are</li>
              <li className=" CursorClass feature ">About</li>
              <li className=" CursorClass feature ">Team</li>
              <li className=" CursorClass feature ">Work With Us</li>
            </ul>
            <ul className="featureList adjustSize">
              <li className="   bolder listHeading">WooCommerce</li>
              <li className=" CursorClass feature ">Features</li>
              <li className=" CursorClass feature ">Payments</li>
              <li className=" CursorClass feature ">Marketing</li>
              <li className=" CursorClass feature ">Shipping</li>
              <li className=" CursorClass feature ">Extension Store</li>
              <li className=" CursorClass feature ">ecommerce blog</li>
              <li className=" CursorClass feature ">Development blog</li>
              <li className=" CursorClass feature ">Ideas board</li>
              <li className=" CursorClass feature ">Mobile App</li>
              <li className=" CursorClass feature ">Community</li>
              <li className=" CursorClass feature ">Style Guide</li>
              <li className=" CursorClass feature ">Email Newsletter</li>
            </ul>
            <ul className="featureList">
              <li className="  bolder listHeading">other products</li>
              <li className="CursorClass feature ">Storefront</li>
              <li className="CursorClass feature ">WooSlider</li>
              <li className="CursorClass feature ">Sensei</li>
              <li className="CursorClass feature ">Sensei Extensions</li>
            </ul>
            <ul className="featureList">
              <li className="   bolder listHeading">Support</li>
              <li className=" CursorClass feature ">Documentation</li>
              <li className=" CursorClass feature ">customizations</li>
              <li className=" CursorClass feature ">Support Policy</li>
              <li className=" CursorClass feature ">Contact</li>
              <li className=" CursorClass feature ">Covid-19 Resources</li>
              <li className=" CursorClass feature ">Privacy Notice for California Users</li>
            </ul>
            <ul className="featureList">
              <li className="   bolder listHeading">we recommend</li>
              <li className=" CursorClass feature ">WooExperts</li>
              <li className=" CursorClass feature ">Hosting Solutions</li>
              <li className=" CursorClass feature ">Pre-sales FAQ</li>
              <li className=" CursorClass feature ">Success Stories</li>
              <li className=" CursorClass feature ">Design Feedback Group</li>
            </ul>
          </div>
          <div className="d-md-none dropDownClass">
            <select className="fw-bold">
              <option className="  fw-bold">Who we are</option>
              <option className=" CursorClass insideSelect">About</option>
              <option className=" CursorClass insideSelect">Team</option>
              <option className=" CursorClass insideSelect">Work With Us</option>
            </select>
            
            <select className="fw-bold">
              <option className="  fw-bold">Other products</option>
              <option className=" CursorClass insideSelect">Storefront</option>
              <option className=" CursorClass insideSelect">WooSlider</option>
              <option className=" CursorClass insideSelect">Sensei</option>
              <option className=" CursorClass insideSelect">Sensei Extensions</option>
            </select>
          
            <select className="fw-bold">
              <option className="  fw-bold">we recommend</option>
              <option className=" CursorClass insideSelect">WooExperts</option>
              <option className=" CursorClass insideSelect">Hosting Solutions</option>
              <option className=" CursorClass insideSelect">Pre-sales FAQ</option>
              <option className=" CursorClass insideSelect">Success Stories</option>
            </select>
          </div>
          <div className="d-md-none dropDownClass widthClass  adjystSecond">
        
            <select className="fw-bold">
              <option className="  fw-bold">WooCommerce</option>
              <option className=" CursorClass insideSelect">Features</option>
              <option className=" CursorClass insideSelect">Payments</option>
              <option className=" CursorClass insideSelect">Marketing</option>
              <option className=" CursorClass insideSelect">Shipping</option>
              <option className=" CursorClass insideSelect">Extension Store</option>
              <option className=" CursorClass insideSelect">ecommerce blog</option>
              <option className=" CursorClass insideSelect">Development blog</option>
              <option className=" CursorClass insideSelect">Ideas board</option>
              <option className=" CursorClass insideSelect">Mobile App</option>
              <option className=" CursorClass insideSelect">Community</option>
              <option className=" CursorClass insideSelect">Style Guide</option>
              <option className=" CursorClass insideSelect">Email Newsletter</option>
            </select>
          
            <select className="fw-bold">
              <option className="insideSelect">Contact us</option>
              <option className="fw-bold insideSelect">Support</option>
              <option className="insideSelect">Documentation</option>
              <option className="insideSelect">customizations</option>
            </select>
          
          </div>
        </div>
        <div className="footerEnd">
          <div className="socialMedia">
            <a href="/"><img src="twitter.png" alt="twitter" /></a>
            <a href="/"><img src="fb.png" alt="fb" /></a>
            <a href="/"><img src="wifi.png" alt="wifi" /></a>
            <a href="/"><img src="insta.svg" alt="insta" /></a>
          </div>
          <div className="copyright d-md-block d-none">
            <a href="/">
            COPYRIGHT WOOCOMMERCE 2020 -
            <span className="term">TERMS & CONDITIONS PRIVACY POLICY</span></a>
          </div>
          <div className="copyright d-md-none">
            <a href="/">
            <span>COPYRIGHT WOOCOMMERCE 2020</span> 
            <span className="term">TERMS & CONDITIONS PRIVACY POLICY</span></a>
          </div>
          <div className="footerLogo">
            <a href="/">
            <img src="automattic.svg" alt="logo" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
