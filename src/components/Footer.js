import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='footer-dark'>
          <footer>
            <div className='container'>
              <div className='row'>
                <div className='col item social'>
                  <a href='https://www.facebook.com/engapplabs' target='_blank'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                  <a href='https://www.instagram.com/engapplabs' target='_blank'>
                    <i className='fab fa-instagram'></i>
                  </a>
                  <a href='https://www.twitter.com/engapplabs' target='_blank'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='https://www.linkedin.com/company/engapplabs' target='_blank'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a href='https://www.github.com/engapplabs' target='_blank'>
                    <i className='fab fa-github'></i>
                  </a>
                  <a href='https://medium.com/@engapplabs' target='_blank'>
                    <i className='fab fa-medium-m'></i>
                  </a>
                </div>
              </div>
              <p className='copyright'>EngApp Labs © 2018 - Desenvolvido por Flávio Farias</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
