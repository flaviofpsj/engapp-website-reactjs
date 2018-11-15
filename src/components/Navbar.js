import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { goToTop } from 'react-scrollable-anchor';

class Navbar extends Component {

  componentWillMount() {
    goToTop()
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <nav className='navbar navbar-dark navbar-expand-lg fixed-top bg-dark transparency border-bottom border-light' id='transmenu'>
            <div className='container-fluid'>
              <Link className='navbar-brand text-success' to='/' onClick={ goToTop }>
                <img className='img-fluid' src={'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/topcontent%2Flogo.png?alt=media&token=cd295c56-fc3d-47cd-acfd-d7efe074509c'} alt='EngApp' />
              </Link>
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
