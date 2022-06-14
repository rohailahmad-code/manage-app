import React from 'react';
import './Intro.css';
import Illustration from '../../images/illustration-intro.svg'

const Intro = () => {
  return (
    <div className="container">
      <div className="intro-wrapper">
          <div className="intro-left">
              <span>Bring everyone together to build better products.</span>
              <p>Manage makes it simple for software teams to plan <br /> day-to-day 
              tasks while keeping the larger team goals in view.</p>
              <button>Get Started</button>
          </div>
          <div className="intro-right">
            <img src={Illustration} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Intro;