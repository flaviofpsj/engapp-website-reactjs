import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import AboutUsItem from './AboutUsItem';

import config from '../firebase-config';

class AboutUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      aboutUsItem: {}
    }

    config.syncState('aboutUsItem', {
      context: this,
      state: 'aboutUsItem',
      asArray: false,
    })
  }

  componentWillMount() {
    configureAnchors({
      scrollDuration: 800
    })
  }

  render() {
    return (
      <React.Fragment>
        <ScrollableAnchor id={'sobre'}>
          <div className='team-boxed'>
            <div className='container'>
              <h2 className='text-center slideanim'>A Empresa</h2>
              <p className='text-center slideanim'>A EngApp é uma empresa de inovação digital e desenvolvimento de software ágil. Combinamos processos de inovação, design de UX, tecnologia de ponta e visão de negócios para criar software que reposiciona os nossos clientes no mundo dos negócios digitais.</p>
              <h2 className='text-center slideanim'>Membros</h2>
              <div className='row people'>
                {
                  Object.keys(this.state.aboutUsItem).map(index => {
                    return(
                      <AboutUsItem key={index} content={this.state.aboutUsItem[index]} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}

export default AboutUs;
