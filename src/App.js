import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Slide from './components/Slide';
import AboutUs from './components/AboutUs';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slide />
        <AboutUs />
        <Technologies />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
