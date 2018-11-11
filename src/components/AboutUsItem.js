import React, { Component } from 'react';

class AboutUsItem extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
          <div className='box'>
            <img className='rounded-circle' src={this.props.content.imageSrc} alt={this.props.content.name} />
            <h3 className='name'>{this.props.content.name}</h3>
            <p className='title'>{this.props.content.office}</p>
            <div className='social'>
              <a href={this.props.content.facebook} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href={this.props.content.instagram} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href={this.props.content.linkedin} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a href={this.props.content.github} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-github'></i>
              </a>
              <a href={this.props.content.medium} target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-medium-m'></i>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutUsItem;
