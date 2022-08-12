import React from 'react'
import { Link } from 'react-router-dom'




const Footer = () => {
  return (
    <div className='footer' >

    <div className='content'>

    <div className='footer-logo'>
    </div>

    <menu>
        <ul>
            <li>
            <Link to='/' onClick={(e) => e.preventDefault()}>
                HOME
            </Link>
            </li>
           
           
           
            <li>
            <Link to='/' onClick={(e) => e.preventDefault()}>
                CONTACT US
            </Link>    
            </li>
            <li>
            <Link to='/' onClick={(e) => e.preventDefault()}>
                ABOUT US
                </Link>    
            </li>
            <li>
            <Link to='/' onClick={(e) => e.preventDefault()}>
                BLOG
            </Link>
            </li>
           
            <li> <Link to='/Privacy' >
             Privacy & Policy 
            </Link>      </li>
        </ul>
    </menu>

    <div className='follow-us'>
    <p> Follow us: </p>
        <section>
        <div>
         <img src='/img/facebook.png' alt='' />
        </div>

        <div>
        <img src='/img/twitter.png' alt='' />
        </div>

        <div>
         <img src='/img/Instagram.png' alt='' />
        </div>
        </section>
        

    </div>

    </div>


    </div>
  )
}

export default Footer