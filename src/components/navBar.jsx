import React, { Component } from 'react';
import { layouts } from '../stylesheets/layout.js';
import { designs } from '../stylesheets/design.js';
import { FaSearch } from 'react-icons/fa';

class NavBar extends Component {

  render() {
    return (
  <nav className="col-lg-12 navbar navbar-expand-lg navbar-light bg-white"
        style={{height: "90px"}}>
  <nav className="col-lg-9 m-auto" style={{display: "flex"}}>
    <a className="navbar-brand" href="#">
    <img src="https://a.icons8.com/qoTlVjif/ZBARju/page-1-copy-4.png"
      width="175"
      height="35" alt="Aus-Hearing-logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav" style={layouts.Navbar}>
        <li className="ml-5 nav-item dropdown">
          <a className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            My Hearing
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="ml-5 nav-item">
          <a className="nav-link" href="#">Tinnitus
            <span className="sr-only">(current)</span></a>
        </li>
        <li className="ml-5 nav-item">
          <a className="nav-link" href="#">Helping Others</a>
        </li>
        <li className="ml-5 nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="ml-5 nav-item">
          <form className="form-inline my-2 my-lg-0">
          <FaSearch style={designs.iconicBlue}/>
            <input className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{border: "0px"}}
                  />
            </form>
        </li>
      </ul>
    </div>
  </nav>
  </nav>
    );
  }

}

export default NavBar;
