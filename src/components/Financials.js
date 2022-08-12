import React,{useState} from "react";
// import logo4 from "././img/logo4.webp";
import Financials1 from "./Financials1"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/* investigationProduct */
const data = [ 
  {
  heading:'Franchise Fee 5 Lacs',
  content:'Start your Franchise Business Under Rs.5 Lakh Now. Check out India most wanted Franchise Opportunity Under Rs.5 Lakh Only'
  },

  {
      heading:'Interiors 1800-2200/sqft',
      content: 'The would be franchisor should have minimum shop area of 200 sqft'
      },

      {
          heading:'Stock 8-15 Lacs',
          content: 'Franchisor is only allowed to purchase stock from the parent company.'
          },
          {
            heading:'Brand Ambassador Fee* 1.5 Lacs',
            content: 'The Brand Ambassador Fee is around 1.5 lakh to perform at an event..'
            },
]

const Financials = () => {  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [message,setMesage]=useState({})
  const [data,setData]=useState({
    first_name:"",
    last_name:"",
    email:"",
    phone:""
  })

  function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log("form",newData)
    }
    function submit(e){
  e.preventDefault();
    // Axios.post(URL,{
    //   first_name :data.first_name,
    //   last_name : data.last_name,
    //   email: data.email,
    //   phone : data.phone
    // }).then(res=>{
    //   alert(res.data)
    //   setMesage(res.data)
    // })
    }
  return (
    <>
  <div className="product-section1" id="financial1">
        <h1
          style={{
            color: "#FF4801",
            fontFamily: "Poppins",
            fontSize: "38px",
            fontWeight: "400",
            lineHeight: "65px",
          }}
        >
Other Financials
        </h1>
        <div className="slick-slider1">
        <Slider {...settings}>
        <div className="content5">
          <div style={{display: 'flex',flexDirection:"row"}}>
        <div className="logo2">
                {" "}
               
                <img style={{width: "347px",height:"347px"}} src={"img/f1.png"} alt="" />
              </div>
        <div className="card2">
            <div>
            <h3>
            Franchise Fee 5 Lacs </h3>
            </div>
            <p  style={{textAlign:"justify",    width: '17rem',paddingTop: '5rem',paddingRight: '-6rem'}}>
            Start your Franchise Business Under Rs.5 Lakh Now. Check out India's most wanted Franchise Opportunity Under Rs.5 Lakh Only.         
            </p>
          </div>
          </div>
        </div>
        <div className="content5">
          <div style={{display: 'flex',flexDirection:"row"}}>
        <div className="logo2">
                {" "}
               
                <img style={{width: "347px",height:"347px"}} src={"img/f2.png"} alt="" />
              </div>
        <div className="card2">
            <div>
            <h3>Interiors 1800-2200/sqft </h3>
            </div>
            <p  style={{textAlign:"justify"}}>
            The would be franchisor should have minimum shop area of 200 sqft
            </p>
          </div>
          </div>
        </div>
        <div className="content5">
          <div style={{display: 'flex',flexDirection:"row"}}>
        <div className="logo2">
                {" "}
               
                <img style={{width: "347px",height:"347px"}} src={"img/f3.png"} alt="" />
              </div>
        <div className="card2">
            <div>
            <h3>Stock 8-15 Lacs </h3>
            </div>
            <p  style={{textAlign:"justify", width: '17rem',paddingTop: '5rem',paddingRight: '-6rem'}} >
            Franchisor is only allowed to purchase stock from the parent company              
            </p>
          </div>
          </div>
        </div>
        <div className="content5">
          <div style={{display: 'flex',flexDirection:"row"}}>
        <div className="logo2">
                {" "}
               
                <img style={{width: "347px",height:"347px"}} src={"img/f4.png"} alt="" />
              </div>
        <div className="card2">
            <div>
            <h3>Brand Ambassador Fee* 1.5 Lacs</h3>
            </div>
            <p  style={{textAlign:"justify", width: '17rem',paddingTop: '5rem',paddingRight: '-6rem'}} >
            The Brand Ambassador Fee is around 1.5 lakh to perform at an event.            </p>
          </div>
          </div>
        </div>
       
        
        </Slider>
        </div>
        <div className="content5">
       
        
        
        
         
        </div>
       
      </div>

        {/* contact us  */}
        <div className='ContactUs-section' id="footer1">    
    <h1>
    Start Business Today
        </h1>
    <div className='content18'>

       <div className='card9'>
        <div>
       <div className='contact-form'>
      <form onSubmit={(e)=>submit(e)}>
      <div className='contact-form1' style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",width:"100%",zIndex:"10",position:"relative"}}> 
                 <div className='contact-input'  style={{display:"flex",flexDirection:"column"}}>
                  <label style={{font:'poppins',weight:"400",fontSize:"25px",color:"white",textAlign:"justify"}}>First Name: *</label>
                    <input  style={{height: '2rem'}}   type="text" id="first_name" value={data.first_name}  onChange={e=>(handle(e))}  />
                    </div>
                 
                    <div className='contact-input'  style={{display:"flex",flexDirection:"column"}}>
                    <label style={{font:'poppins',weight:"400",fontSize:"25px",color:"white",textAlign:"justify"}}>Last Name: *</label>
                    <input  style={{height: '2rem'}}  type="text" id="last_name" value={data.last_name}  onChange={e=>(handle(e))}  />
                   </div>
                
               <div className='contact-input'  style={{display:"flex",flexDirection:"column"}}>
               <label style={{font:'poppins',weight:"400",fontSize:"25px",color:"white",textAlign:"justify"}}>Email: *</label>
                    <input  style={{height: '2rem'}}    type="email" value={data.email} id="email" onChange={e=>(handle(e))}  />
                    </div>
                
                 <div className='contact-input'  style={{display:"flex",flexDirection:"column"}} >
                 <label style={{font:'poppins',weight:"400",fontSize:"25px",color:"white",textAlign:"justify"}}>Phone: *</label>
                    <input style={{height: '2rem'}}   type="text" value={data.phone} id="phone" onChange={e=>(handle(e))}  />
                    </div>
                   
                    </div>
                  
                </form>
                <div className='contact-button'>
                
                    <button style={{backgroundColor:'#4DD637',fontSize:'18px',color:'black'}} onClick={submit}>Send Message</button>
                    <p >  By clicking Submit, I agree to the use of my personal data in accordance with SentinelOne Privacy Policy. SentinelOne will not sell, trade, lease, or rent your personal data to third parties.</p> 
                    </div>
                    
               
                </div>
          
               
       </div> 
       </div>
       
     </div>
    
    </div>

      
    </>
  );
};

export default Financials;
