import React from "react";
import Card from "./../Pages/Card/Card"

const Menu = () => {
  return (
    <div id="menu1">
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              {/* <img src="/img/gym1.webp" alt="gym" /> */}

            </div>
          </div>
          <div className="col-6 p-25">
            <h1 style={{color:'yellowgreen',position: 'relative'}}>Urbanfit Franchies Vision</h1>     
          </div>
          <div className="content1">

<Card
title=""
img={'img/logo1.png'}
desc=" We aim to bring the change in fitness industry by establishing network of state of the art health supplement storess"


/>
  <Card
title=""
img={'img/logo2.jpg'}
desc=" There is no possibility of fake products with UrbanFit due to our vast tie network of premium supplement brands."


/>
<Card
title=""
img={'img/logo3.png'}
desc="Our priority will always be our customer. We aim to build trust, happiness and loyalty for our customers."


/>
</div>

        </div>
      </div>
    </div>

    {/* Prerequisites & Procedure */}
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              {/* <img src="/img/gym1.webp" alt="gym" /> */}
            </div>
          </div>
          <div className="col-6 p-25">
            <h1 style={{color:'yellowgreen',position: 'relative'}}>Prerequisites & Procedure</h1>    
            {/* <h3 style={{paddingRight:'12rem'}}>We are looking for people who are ready and eager to work with us to successfully launch a franchise and smoothly operate it.</h3>  */}
          </div>
          <div className="content1">

<Card
title=""
img={'img/logo4.webp'}
desc="People willing to donate time and resources to
the business"


/>
  <Card
title=""
img={'img/logo5.webp'}
desc="People with long term vision and the determination to make it happen"


/>
<Card
title=""
img={'img/logo6.webp'}
desc="Financial and logistical requirements and guidelines"


/>
<div style={{display: 'flex',marginTop: '3rem',gap: '4rem'}}>
<Card
title=""
img={'img/logo7.webp'}
desc="A sound investor profile with sufficient back up and ability to sustain during adverse scenarios"


/>
  <Card
title=""
img={'img/logo8.webp'}
desc="Attractive space in a high footfall area with a minimum carpet area of 200 sq. ft - 500 sq. ft."


/>
<Card
title=""
img={'img/logo9.webp'}
desc="Willingness to adhere to high customer service standards set by UrbanFit."


/>
</div>
</div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
