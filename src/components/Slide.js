import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

import SlideItem from './SlideItem';

class Slide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideItem: [
        {
          title: 'Desenvolvimento de', subtitle: 'Softwares e Aplicativos', icon: 'fa fa-code',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide1.png?alt=media&token=1ba4ecd0-1f93-44f9-8f6e-7beeabcf1b9f)`},
        },
        {
          title: 'Design de', subtitle: 'User Experience', icon: 'fa fa-diamond',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide2.png?alt=media&token=a2dd6c81-63e8-4650-8167-3b3344bc3b39)`},
        },
        {
          title: 'Planejamento', subtitle: 'de Negócios', icon: 'fa fa-building-o',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide3.png?alt=media&token=147fe08b-60e7-4ea4-bef9-0c7c99d15bdf)`},
        },
      ]
    }
  }

  render() {
    const params = {
      loop: true,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-white',
        prevEl: '.swiper-button-prev.swiper-button-white',
      },
      pagination: {
        el: '.swiper-pagination.swiper-pagination-white',
        clickable: true,
        dynamicBullets: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    }
    return (
      <React.Fragment>
        <div className='simple-slider'>
          <div className='swiper-container'>
            <Swiper {...params} className='swiper-wrapper'>
              {
                Object.keys(this.state.slideItem).map(index => {
                  return(
                    <SlideItem key={index} content={this.state.slideItem[index]} />
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Slide;
