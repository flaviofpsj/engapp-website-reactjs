import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

const bgImage = 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/headers%2Fcontact.png?alt=media&token=19a3b16b-d07e-4536-a4c5-38ab5782d730';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        backgroundPosition: 'center', backgroundSize: 'cover',
      }
    }
  }

  componentWillMount() {
    configureAnchors({
      scrollDuration: 1600
    })
  }

  render() {
    return (
      <React.Fragment>
        <ScrollableAnchor id={'contato'}>
          <Parallax bgImage={bgImage} strength={550} bgStyle={this.state.style}>
            <h1 className='text-white' id='bottom-titles'>Contato</h1>
          </Parallax>
        </ScrollableAnchor>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              <div className='col-md-6 col-lg-6 item slideanim'>
                <div className='box'>
                  <i className='fa fa-whatsapp icon'></i>
                  <h3 className='name'>Whatsapp</h3>
                  <a href='https://api.whatsapp.com/send?phone=5582996598159&text=Olá,%20Luccas!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank' rel='noopener noreferrer'>Luccas Augusto</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 item slideanim'>
                <div className='box'>
                  <i className='fa fa-envelope-o icon'></i>
                  <h3 className='name'>E-mail</h3>
                  <a href='mailto:engapplabs@gmail.com?cc=luccas@engapp.com.br&subject=Contato:&body=Olá!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank' rel='noopener noreferrer'>engapplabs@gmail.com</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
