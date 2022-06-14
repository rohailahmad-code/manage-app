import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.svg'
import PatternImg from '../../images/bg-tablet-pattern.svg'

const Navbar = () => {
  return (
    <div className="container">
      <div className="nav-wrapper">
        <div className="nav-left">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
        </div>
        <div className="nav-middle">
          <div className="nav-links">
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <button>Get Started</button>
          <img src={PatternImg} alt="" />
        </div>
      </div>
    
    </div>
    
   
  )
}

export default Navbar