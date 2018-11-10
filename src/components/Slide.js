import React, { Component } from 'react';

import Slide1 from './../img/slide1.png';
import Slide2 from './../img/slide2.png';
import Slide3 from './../img/slide3.png';

class Slide extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='simple-slider'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div style={{ backgroundImage: 'url(' + Slide1 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-code' id='icon-header'></i>
                    <br />Desenvolvimento de<br />Softwares e Aplicativos
                  </h1>
                </div>
              </div>
              <div style={{ backgroundImage: 'url(' + Slide2 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-diamond' id='icon-header'></i>
                    <br />Design de<br />User Experience
                  </h1>
                </div>
              </div>
              <div style={{ backgroundImage: 'url(' + Slide3 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-building-o' id='icon-header'></i>
                    <br />Planejamento<br />de Negócios
                  </h1>
                </div>
              </div>
            </div>
            <div className='swiper-pagination swiper-pagination-white'></div>
            <div className='swiper-button-prev swiper-button-white'></div>
            <div className='swiper-button-next swiper-button-white'></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slide;
