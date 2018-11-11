import React, { Component } from 'react';

import AboutUsItem from './AboutUsItem';

class AboutUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      aboutUsItem: [
        {
          imageSrc: require('./../img/luccas.png'), name: 'Luccas Augusto', office: 'Diretor Executivo',
          facebook: 'https://www.facebook.com/luccasskywalker', instagram: 'https://www.instagram.com/luccascunhasilva', linkedin: 'https://www.linkedin.com/in/luccasaugusto',
          github: 'https://github.com/LuccasAugusto', medium: 'https://medium.com/@engapplabs',
        },
        {
          imageSrc: require('./../img/aurelio.png'), name: 'Aurélio Buarque', office: 'Diretor de Tecnologia',
          facebook: 'https://www.facebook.com/aurelio.buarque', instagram: 'https://www.instagram.com/abuarquemf', linkedin: 'https://www.linkedin.com/in/aurelio-buarque',
          github: 'https://github.com/ABuarque', medium: 'https://medium.com/@abuarquemf',
        },
        {
          imageSrc: require('./../img/hugo.png'), name: 'Hugo Davi', office: 'Diretor de Operações',
          facebook: 'https://www.facebook.com/hugo.hdado', instagram: 'https://www.instagram.com/hugodavi', linkedin: 'https://www.linkedin.com/in/hugodavi',
          github: 'https://github.com/HugoDavi', medium: 'https://medium.com/@hugo.hdado',
        },
        {
          imageSrc: require('./../img/malta.png'), name: 'Fellipe Malta', office: 'Head de Front-end',
          facebook: 'https://www.facebook.com/fellipe.dm', instagram: 'https://www.instagram.com/fellipe.dm', linkedin: 'https://www.linkedin.com/in/fellipedm',
          github: 'https://github.com/fmmalta', medium: 'https://medium.com/@fellipemalta',
        },
        {
          imageSrc: require('./../img/flavio.png'), name: 'Flávio Farias', office: 'Head de Design',
          facebook: 'https://www.facebook.com/flaviofariasjr', instagram: 'https://www.instagram.com/flavioaq2', linkedin: 'https://www.linkedin.com/in/ffpsj',
          github: 'https://github.com/ffpsj', medium: 'https://medium.com/@ffpsj',
        },
        {
          imageSrc: require('./../img/pedro.png'), name: 'Pedro Soares', office: 'Head de Back-end',
          facebook: 'https://www.facebook.com/pedro.soares.58726', instagram: 'https://www.instagram.com/pedroh_soaresc', linkedin: 'https://www.linkedin.com/in/pedrohsoares',
          github: 'https://github.com/pedrohsoares', medium: 'https://medium.com/@engapplabs',
        },
      ]
    }
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
