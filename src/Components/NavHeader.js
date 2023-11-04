import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../Styles/NavHeader.scss";
import MainScreen from "./MainScreen";

function NavHeader() {
  const [nav, setNav] = useState(true);
  const [show , setShow] = useState(true)
  const [search, setSearch] = useState(true);
  // const reff = useRef(null)

  const clickEvent=()=>{
    setSearch(false);
    setTimeout(() => {
      
      document.getElementById("inPuts").focus();
    }, 100);
  //  input.focus();
    // reff?.current?.focus()
  }

  return (
    <div className="backGroundColor">
      <Navbar className="p-lg-4 p-3 zclass" expand="md">
        <Navbar.Brand href="/">
          <img
            src="woologo.svg"
            alt="logo"
            height="30"
            className="d-inline-block align-text-top ps-md-3"
          />
        </Navbar.Brand>
        <>
          {nav ? (
            <div>
              <span className=" d-md-none adjustsearch">
                <img src="search.png" alt="search" />
              </span>
              <Navbar.Toggle
                className="ms-sm-5 ms-3"
                aria-controls="navbarScroll"
                onClick={() => setNav(false)}
              />
            </div>
          ) : (
            <Navbar.Toggle
              className="border-0"
              aria-controls="navbarScroll"
              onClick={() => setNav(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x-lg text-dark ms-sm-5 ms-3"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </Navbar.Toggle>
          )}
        </>

        <Navbar.Collapse id="navbarScroll" className={`navHead ${nav? 'show1 ' : 'show'}`}>
          <Nav className="navGap" navbarScroll>
            <Nav.Link className="" href="#action1" onClick={()=>setNav(true)}>
              Sell
            </Nav.Link>
            <Nav.Link className="" href="#action2" onClick={()=>setNav(true)}>
              Marketplace
            </Nav.Link>
            <Nav.Link className="" href="#action3" onClick={()=>setNav(true)} >
              Community
            </Nav.Link>
            <Nav.Link className="" href="#action4" onClick={()=>setNav(true)} >
              Develop
            </Nav.Link>
            <Nav.Link className="" href="#action5" onClick={()=>setNav(true)}>
              Resources
            </Nav.Link>
          </Nav>
          <div className="navbar-nav lastHead pe-3">
            <div className="adjustaftermd">
              {search ? (
                <>
                  <a className="" href="/">
                    Log In
                  </a>

                  <button className="ms-md-4 p-2">Get Started</button>

                  <span
                    className="ms-4 d-md-inline d-none"
                    onClick={() => clickEvent()}
                  >
                    <img src="search.png" alt="search" />
                  </span>
                </>
              ) : (
                <div>
                  <input
                    type="search"
                    id="inPuts"
                    placeholder="search"
                    className="searchEffect ps-2"
                    // ref={reff}
                    onClick={() => setSearch(true)}
                  />
                </div>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <MainScreen onClick={()=>setNav(true)} />
    </div>
  );
}

export default NavHeader;
