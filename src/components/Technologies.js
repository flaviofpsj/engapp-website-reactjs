import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import TechnologiesItem from './TechnologiesItem';

import config from '../firebase-config';

const bgImage = 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/headers%2Ftechnologies.png?alt=media&token=0846d64f-e167-4e01-8e97-5521a5d7d261';

class Technologies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        backgroundPosition: 'center', backgroundSize: 'cover',
      },
      technologiesItem: {}
    }

    config.syncState('technologiesItem', {
      context: this,
      state: 'technologiesItem',
      asArray: false,
    })
  }

  componentWillMount() {
    configureAnchors({
      scrollDuration: 1200
    })
  }

  render() {
    return (
      <React.Fragment>
        <ScrollableAnchor id={'tecnologias'}>
          <Parallax bgImage={bgImage} strength={550} bgStyle={this.state.style}>
            <h1 className='text-white' id='bottom-titles'>Tecnologias</h1>
          </Parallax>
        </ScrollableAnchor>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              {
                Object.keys(this.state.technologiesItem)
                  .sort((a, b) => a - b)
                  .map(index => {
                    return(
                      <TechnologiesItem key={index} content={this.state.technologiesItem[index]} />
                    )
                })
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
