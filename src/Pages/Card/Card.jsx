
import React, { useContext } from "react";


const Card = (props) => {
  return (
    <>
      <div style={{paddingTop:"20px"}}  className='card'>
               <div>
               <div className="heading-h3">
        <h3>
       {props.title}
                </h3>
</div> 
        <div className='logo'>
        <img src={props.img} alt='' />
        </div>
        <div className="p-box">
        <p style={{textAlign:"justify",color:'whitesmoke',paddingTop:'1.5rem'}}>
    {props.desc}
        </p>
</div>
         <div className='bottom'>
           <h3> {props.button} </h3>
           <div> 
           <img  src={props.img1} alt='' />
           </div> 
        </div>
</div>
       </div> 

 
    </>
  )}

export default Card