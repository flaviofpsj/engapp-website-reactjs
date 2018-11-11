import React, { Component } from 'react';

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

  render() {
    return (
      <React.Fragment>
        <div id='sobre' className='team-boxed'>
          <div className='container'>
            <h2 className='text-center' data-aos='fade-up'>A Empresa</h2>
            <p className='text-center' data-aos='fade-up'>A EngApp é uma empresa de inovação digital e desenvolvimento de software ágil. Combinamos processos de inovação, design de UX, tecnologia de ponta e visão de negócios para criar software que reposiciona os nossos clientes no mundo dos negócios digitais.</p>
            <h2 className='text-center' data-aos='fade-up'>Membros</h2>
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
      </React.Fragment>
    );
  }
}

export default AboutUs;
