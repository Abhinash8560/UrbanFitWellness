import React from "react";

const Location = () => {
  return (
    <div className="shop" id="location1">
      <div className="container">
        <div className="shop__text">
          <div>
            <div className="shop__btn">
              <h1 style={{color:'greenyellow'}}>UrbanFit Location</h1>
</div><br />
<div style={{display:'flex',justifyContent:'space-between'}}>
            <h3 style={{marginLeft:'-14rem'}}>UrbanFit Shop - F Residency</h3>
            <h3>UrbanFit Shop - Kharadi</h3>
            <h3 style={{marginRight:'-20rem'}}>UrbanFit Shop - Bibewadi</h3>
            </div>

            {/* <div className="shop__btn">
              <a href="" className="btn btn-smart">
                SHOP NOW
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
