import React, { Component } from 'react';

import SlideItem from './SlideItem';

class Slide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideItem: [
        {
          title: 'Desenvolvimento de', subtitle: 'Softwares e Aplicativos', icon: 'fa fa-code',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/slide1.png?alt=media&token=361be421-09db-42b5-a7ac-d3bd7cef9b25)`},
        },
        {
          title: 'Design de', subtitle: 'User Experience', icon: 'fa fa-diamond',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/slide2.png?alt=media&token=77c001cf-95f0-4ba8-bb33-38804a693498)`},
        },
        {
          title: 'Planejamento', subtitle: 'de Negócios', icon: 'fa fa-building-o',
          style: {backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/slide3.png?alt=media&token=610de315-4d99-4b23-b891-ae5698b18db2)`},
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
