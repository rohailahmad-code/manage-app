import React from 'react';
import './About.css';

const About = () => {
  return (
      <div className="container">
        <div className="about-wrapper">
            <div className="about-left">
                <span>What's different about Manage?</span>
                <p>Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.</p>
            </div>
            <div className="about-right">
    
                <div className="about-info">
                    <div className="left-number">
                        <span>01</span>
                    </div>
                    <div className="right-data">
                        <h3>Track company-wide progress</h3>
                        <p>See how your day-to-day tasks fit into the wider vision. Go from 
                        tracking progress at the milestone level all the way done to the 
                        smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                </div>
    
                <div className="about-info">
                    <div className="left-number">
                        <span>02</span>
                    </div>
                    <div className="right-data">
                        <h3>Advanced built-in reports</h3>
                        <p>Set internal delivery estimates and track progress toward company 
                        goals. Our customisable dashboard helps you build out the reports 
                        you need to keep key stakeholders informed.</p>
                    </div>
                </div>
    
                <div className="about-info">
                    <div className="left-number">
                        <span>03</span>
                    </div>
                    <div className="right-data">
                        <h3>Everything you need in one place</h3>
                        <p>Stop jumping from one service to another to communicate, store files, 
                        track tasks and share documents. Manage offers an all-in-one team 
                        productivity solution.</p>
                    </div>
                </div>
    
            </div>
        </div>
      </div>
  )
}

export default About

