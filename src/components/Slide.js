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
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide1.png?alt=media&token=0cfa4e7b-ddcc-4661-ae3e-1cc5f246fad4)`},
        },
        {
          title: 'Design de', subtitle: 'User Experience', icon: 'fa fa-diamond',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide2.png?alt=media&token=3cc3fd97-9eb2-47ce-84c5-a676c2ac9905)`},
        },
        {
          title: 'Planejamento', subtitle: 'de Negócios', icon: 'fa fa-building-o',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Fslide3.png?alt=media&token=1c27d101-4db6-4929-9b38-c117b0550251)`},
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
