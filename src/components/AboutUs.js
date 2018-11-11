import React, { Component } from 'react';

import AboutUsItem from './AboutUsItem';

class AboutUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      aboutUsItem: [
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/luccas.png?alt=media&token=5245ca90-3738-42b9-9674-5eb4ead9c81d',
          name: 'Luccas Augusto', office: 'Diretor Executivo', facebook: 'https://www.facebook.com/luccasskywalker',
          instagram: 'https://www.instagram.com/luccascunhasilva', linkedin: 'https://www.linkedin.com/in/luccasaugusto',
          github: 'https://github.com/LuccasAugusto', medium: 'https://medium.com/@engapplabs',
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/aurelio.png?alt=media&token=82825372-7e76-4a20-a95d-5189b7a85bdb',
          name: 'Aurélio Buarque', office: 'Diretor de Tecnologia', facebook: 'https://www.facebook.com/aurelio.buarque',
          instagram: 'https://www.instagram.com/abuarquemf', linkedin: 'https://www.linkedin.com/in/aurelio-buarque',
          github: 'https://github.com/ABuarque', medium: 'https://medium.com/@abuarquemf',
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/hugo.png?alt=media&token=3c532e3b-d301-47b2-8a9d-41e630dd5b34',
          name: 'Hugo Davi', office: 'Diretor de Operações', facebook: 'https://www.facebook.com/hugo.hdado',
          instagram: 'https://www.instagram.com/hugodavi', linkedin: 'https://www.linkedin.com/in/hugodavi',
          github: 'https://github.com/HugoDavi', medium: 'https://medium.com/@hugo.hdado',
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/malta.png?alt=media&token=73acb91d-c512-414a-a6e1-4f16b0e193f5',
          name: 'Fellipe Malta', office: 'Head de Front-end', facebook: 'https://www.facebook.com/fellipe.dm',
          instagram: 'https://www.instagram.com/fellipe.dm', linkedin: 'https://www.linkedin.com/in/fellipedm',
          github: 'https://github.com/fmmalta', medium: 'https://medium.com/@fellipemalta',
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/flavio.png?alt=media&token=a23e57d4-0753-4a38-a290-0796360752c3',
          name: 'Flávio Farias', office: 'Head de Design', facebook: 'https://www.facebook.com/flaviofariasjr',
          instagram: 'https://www.instagram.com/flavioaq2', linkedin: 'https://www.linkedin.com/in/ffpsj',
          github: 'https://github.com/ffpsj', medium: 'https://medium.com/@ffpsj',
        },
        {
          imageSrc: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/pedro.png?alt=media&token=9a3618db-fa82-4fc7-bc8f-518ef29777a5',
          name: 'Pedro Soares', office: 'Head de Back-end', facebook: 'https://www.facebook.com/pedro.soares.58726',
          instagram: 'https://www.instagram.com/pedroh_soaresc', linkedin: 'https://www.linkedin.com/in/pedrohsoares',
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
