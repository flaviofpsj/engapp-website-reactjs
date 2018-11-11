import React, { Component } from 'react';

class SlideItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={this.props.content.style} className='swiper-slide'>
          <div id='header-div'>
            <h1 className='text-white' id='heading-information'>
              <i className={this.props.content.icon} id='icon-header'></i>
              <br />{this.props.content.title}<br />{this.props.content.subtitle}
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SlideItem;
