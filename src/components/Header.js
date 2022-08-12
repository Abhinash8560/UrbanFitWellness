import React from "react";
import Navbar from "./Navbar";






const Header = () => {    
  return (
    <div className="banner" id="header1">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3 style={{color:'yellow'}}>Profitable Business</h3>
            <h1>Be your Own Boss</h1>
            <p style={{color:"greenyellow",fontFamily:'sans-serif',fontSize:'2rem'}}>
            we have vast customer base already in pune with over 10,000 regular customer
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
               GET FRANCHISE
              </a>
            </div>
          </div>
   
        </div>
      </div>
    </div>
  );
};

export default Header;
