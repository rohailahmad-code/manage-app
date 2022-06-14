import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import About from './Components/About/About';
import Reviews from './Components/Reviews/Reviews';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';


import './App.css';

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Navbar />
          <Intro />
          <About/>
          <Reviews/>
          <CTA/>
          <Footer/>
        </div>
      
    );
  }
}

export default App;
