import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import TechnologiesItem from './TechnologiesItem';

import config from '../firebase-config';

const bgImage = 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/headers%2Ftechnologies.png?alt=media&token=764a3926-9882-4b95-a4e0-4c9a105676fe';

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
          <div>
            <Parallax bgImage={bgImage} strength={550} bgStyle={this.state.style}>
              <h1 className='text-white' id='bottom-titles'>Tecnologias</h1>
            </Parallax>
          </div>
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
