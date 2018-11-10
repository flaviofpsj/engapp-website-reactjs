import React, { Component } from 'react';

import Slide1 from './img/slide1.png';
import Slide2 from './img/slide2.png';
import Slide3 from './img/slide3.png';

import Technologies from './img/technologies.png';
import Contact from './img/contact.png';

class App extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR */}
        <header>
          <nav className='navbar navbar-dark navbar-expand-lg fixed-top bg-dark transparency border-bottom border-light' id='transmenu'>
            <div className='container-fluid'>
              <a className='navbar-brand text-success' href='index.html'>
                <img className='img-fluid' src={require('./img/logo.png')} />
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
        {/* SLIDE HEADER */}
        <div className='simple-slider'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div style={{ backgroundImage: 'url(' + Slide1 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-code' id='icon-header'></i>
                    <br />Desenvolvimento de<br />Softwares e Aplicativos
                  </h1>
                </div>
              </div>
              <div style={{ backgroundImage: 'url(' + Slide2 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-diamond' id='icon-header'></i>
                    <br />Design de<br />User Experience
                  </h1>
                </div>
              </div>
              <div style={{ backgroundImage: 'url(' + Slide3 + ')' }} className='swiper-slide'>
                <div id='header-div'>
                  <h1 className='text-white' id='heading-information'>
                    <i className='fa fa-building-o' id='icon-header'></i>
                    <br />Planejamento<br />de Negócios
                  </h1>
                </div>
              </div>
            </div>
            <div className='swiper-pagination swiper-pagination-white'></div>
            <div className='swiper-button-prev swiper-button-white'></div>
            <div className='swiper-button-next swiper-button-white'></div>
          </div>
        </div>
        {/* ABOUT US */}
        <div id='sobre' className='team-boxed'>
          <div className='container'>
            <h2 className='text-center' data-aos='fade-up'>A Empresa</h2>
            <p className='text-center' data-aos='fade-up'>A EngApp é uma empresa de inovação digital e desenvolvimento de software ágil. Combinamos processos de inovação, design de UX, tecnologia de ponta e visão de negócios para criar software que reposiciona os nossos clientes no mundo dos negócios digitais.</p>
            <h2 className='text-center' data-aos='fade-up'>Membros</h2>
            <div className='row people'>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/luccas.png')} />
                  <h3 className='name'>Luccas Augusto</h3>
                  <p className='title'>Diretor Executivo</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/luccasskywalker' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/luccascunhasilva' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/luccasaugusto' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/LuccasAugusto' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/aurelio.png')} />
                  <h3 className='name'>Aurélio Buarque</h3>
                  <p className='title'>Diretor de Tecnologia</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/aurelio.buarque' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/abuarquemf' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/aurelio-buarque' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/ABuarque' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a href='https://medium.com/@abuarquemf' target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/hugo.png')} />
                  <h3 className='name'>Hugo Davi</h3>
                  <p className='title'>Diretor de Operações</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/hugo.hdado' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/hugodavi' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/hugodavi' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/HugoDavi' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a href='https://medium.com/@hugo.hdado' target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/malta.png')} />
                  <h3 className='name'>Fellipe Malta</h3>
                  <p className='title'>Head de Front-end</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/fellipe.dm' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/fellipe.dm' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/fellipedm' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/fmmalta' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a href='https://medium.com/@fellipemalta' target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/flavio.png')} />
                  <h3 className='name'>Flávio Farias</h3>
                  <p className='title'>Head de Design</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/flaviofariasjr' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/flavioaq2' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/ffpsj' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/ffpsj' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a href='https://medium.com/@ffpsj' target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-lg-4 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='rounded-circle' src={require('./img/pedro.png')} />
                  <h3 className='name'>Pedro Soares</h3>
                  <p className='title'>Head de Back-end</p>
                  <div className='social'>
                    <a href='https://www.facebook.com/pedro.soares.58726' target='_blank'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='https://www.instagram.com/pedroh_soaresc' target='_blank'>
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/pedrohsoares' target='_blank'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/pedrohsoares' target='_blank'>
                      <i className='fab fa-github'></i>
                    </a>
                    <a target='_blank'>
                      <i className='fab fa-medium-m'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* TECHNOLOGIES */}
        <div style={{ backgroundImage: 'url(' + Technologies + ')', backgroundPosition: 'center', backgroundSize: 'cover' }} data-bs-parallax-bg='true' id='tecnologias'>
          <h1 className='text-white' id='bottom-titles'>Tecnologias</h1>
        </div>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/aws.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>AWS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/bootstrap4.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Bootstrap 4</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/c++.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>C++</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/css3.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>CSS3</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/dart.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Dart</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/docker.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Docker</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/es6.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>ES6</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/expressjs.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>ExpressJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/figma.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Figma</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/firebase.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Firebase</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/flutter.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Flutter</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/gimp.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>GIMP</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/git.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Git</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/golang.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Golang</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/html5.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>HTML5</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/java.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Java</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/javascript.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>JavaScript</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/kotlin.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Kotlin</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/loopback.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Loopback</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/materialdesign.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Material Design</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/mongodb.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>MongoDB</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/mysql.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>MySQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/nodejs.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>NodeJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/photoshop.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Photoshop</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/postgresql.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>PostgreSQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/python.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Python</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/react.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>React</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./img/spring.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Spring</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT */}
        <div style={{ backgroundImage: 'url(' + Contact + ')', backgroundPosition: 'center', backgroundSize: 'cover' }} data-bs-parallax-bg='true' id='contato'>
          <h1 className='text-white' id='bottom-titles'>Contato</h1>
        </div>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              <div className='col-md-6 col-lg-6 item' data-aos='fade-up'>
                <div className='box'>
                  <i className='fa fa-whatsapp icon'></i>
                  <h3 className='name'>Whatsapp</h3>
                  <a href='https://api.whatsapp.com/send?phone=5582996598159&text=Olá,%20Luccas!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank'>Luccas Augusto</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
              <div className='col-md-6 col-lg-6 item' data-aos='fade-up'>
                <div className='box'>
                  <i className='fa fa-envelope-o icon'></i>
                  <h3 className='name'>E-mail</h3>
                  <a href='mailto:engapplabs@gmail.com?cc=luccas@engapp.com.br&subject=Contato:&body=Olá!%20Estou%20entrando%20em%20contato%20através%20do%20site%20da%20EngApp.' target='_blank'>engapplabs@gmail.com</a>
                  <p id='contact-leg'>Clique no link acima para enviar uma mensagem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER/COPYRIGHT/DEVELOPMENT */}
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
      </div>
    );
  }
}

export default App;
