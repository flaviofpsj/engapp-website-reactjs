import React, { Component } from 'react';

import Slide1 from './../img/slide1.png';
import Slide2 from './../img/slide2.png';
import Slide3 from './../img/slide3.png';

import SlideItem from './SlideItem';

class Slide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideItem: [
        {
          title: 'Desenvolvimento de', subtitle: 'Softwares e Aplicativos',
          icon: 'fa fa-code', style: {backgroundImage: `url(${ Slide1 })`},
        },
        {
          title: 'Design de', subtitle: 'User Experience',
          icon: 'fa fa-diamond', style: {backgroundImage: `url(${ Slide2 })`},
        },
        {
          title: 'Planejamento', subtitle: 'de Negócios',
          icon: 'fa fa-building-o', style: {backgroundImage: `url(${ Slide3 })`},
        },
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='simple-slider'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              {
                Object.keys(this.state.slideItem).map(index => {
                  return(
                    <SlideItem key={index} content={this.state.slideItem[index]} />
                  )
                })
              }
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
