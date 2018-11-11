import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className='navbar navbar-dark navbar-expand-lg fixed-top bg-dark transparency border-bottom border-light' id='transmenu'>
            <div className='container-fluid'>
              <a className='navbar-brand text-success' href='index.html'>
                <img className='img-fluid' src={'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/logo.png?alt=media&token=df6cbef1-650a-434b-9df7-e22ac41d57c5'} alt='EngApp' />
              </a>
              <button className='navbar-toggler collapsed' data-toggle='collapse' data-target='#navcol-1'>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className='collapse navbar-collapse' id='navcol-1'>
                <ul className='nav navbar-nav ml-auto'>
                  <li className='nav-item' role='presentation'>
                    <a className='nav-link' href='#sobre'>Sobre Nós</a>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <a className='nav-link' href='#tecnologias'>Tecnologias</a>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <a className='nav-link' href='#contato'>Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
