import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.jpg" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#header1">home</a>
          </li>
          <li>
            <a href="#about1">About Us</a>
          </li>
          {/* <li>
            <a href="#location1">Location</a>
          </li> */}
          <li>
            <a href="#menu1">Our Vision</a>
          </li>
          {/* <li>
            <a href="#client1">Clients</a>
          </li> */}
          <li>
            <a href="#financial1">Financials</a>
          </li>
          <li>
            <a href="#footer1">Enquiry</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
