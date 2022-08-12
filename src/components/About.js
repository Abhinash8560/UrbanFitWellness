import React from "react";

const About = () => {
  return (
    <div className="about" id="about1">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h1 style={{color:'greenyellow'}}>Why UrbanFit</h1>
            <p style={{marginLeft:'-9rem',fontSize: 'large',marginLeft: '-11rem',color: 'black'}}>
            Owning a franchise not only will give you the opportunity to take charge of your own successful business but also allows you to be a part of the movement in the business of health supplements. If you are accepted as a UrbanFit Franchise owner, you will be a partner of India’s fastest growing fitness tech brand and the most trustworthy name in the industry
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/aboutUs1.jpg" alt="aboutUsImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
