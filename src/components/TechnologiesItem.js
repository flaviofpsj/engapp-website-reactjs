import React, { Component } from 'react';

class TechnologiesItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='col-sm-6 col-md-4 col-lg-3 item slideanim'>
          <div className='box'>
            <img className='img-fluid' src={this.props.content.url} alt={this.props.content.title} id='tech-image' />
            <h3 id='tech-title' className='name'>{this.props.content.title}</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TechnologiesItem;
