import React from "react";

const Clients = () => {
  return (
    <div className="clients" id="client1">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="client">
              <h1>15462</h1>
              <p style={{fontSize:'1.5rem',color:'smokeWhite'}}>No of client Per Month</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>3</h1>
              <p style={{fontSize:'1.5rem',color:'smokeWhite'}}>No of Stores</p>
            </div>
          </div>
          <div className="col-3">
            <div className="client">
              <h1>10 Lacs</h1>
              <p style={{fontSize:'1.5rem',color:'smokeWhite'}}>Revenue Generated Per Store</p>
            </div>
          </div>

          <div className="col-3">
            <div className="client">
              <h1>67</h1>
              <p style={{fontSize:'1.5rem',color:'smokeWhite'}}>Brands Officially Connected</p>
            </div>
          </div>
          {/* <div className="col-3">
            <div className="client">
              <h1>*</h1>
              <p>opportunities</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Clients;
