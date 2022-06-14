import React from 'react';
import './Footer.css';

import Logo from '../../images/logo-white.svg';
import Facebook from '../../images/icon-facebook.svg';
import Youtube from '../../images/icon-youtube.svg';
import Twitter from '../../images/icon-twitter.svg';
import Pinterest from '../../images/icon-pinterest.svg';
import Instagram from '../../images/icon-instagram.svg';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="col-1">
                    <div className="footer-logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="social-links">
                        <a href="#"><img src={Facebook} alt="" /></a>
                        <a href="#"><img src={Youtube} alt="" /></a>
                        <a href="#"><img src={Twitter} alt="" /></a>
                        <a href="#"><img src={Pinterest} alt="" /></a>
                        <a href="#"><img src={Instagram} alt="" /></a>
                    </div>
                </div>
                <div className="col-2">
                    <div className="left-side">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>

                    <div className="right-side">
                        <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                </div>
            
                <div className="col-3">
                    <div className="footer-input">
                        <input type="text" placeholder='Updates in your inbox…' />
                        <button>Go</button>
                    </div>
                    <div className="copyright">
                        <span>Copyright 2020. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer