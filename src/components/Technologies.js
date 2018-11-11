import React, { Component } from 'react';

import TechnologiesHeader from './../img/technologies.png';

class Technologies extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: 'url(' + TechnologiesHeader + ')', backgroundPosition: 'center', backgroundSize: 'cover' }} data-bs-parallax-bg='true' id='tecnologias'>
          <h1 className='text-white' id='bottom-titles'>Tecnologias</h1>
        </div>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/aws.png')} alt='AWS' id='tech-image' />
                  <h3 id='tech-title' className='name'>AWS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/bootstrap4.png')} alt='Bootstrap 4' id='tech-image' />
                  <h3 id='tech-title' className='name'>Bootstrap 4</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/c++.png')} alt='C++' id='tech-image' />
                  <h3 id='tech-title' className='name'>C++</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/css3.png')} alt='CSS3' id='tech-image' />
                  <h3 id='tech-title' className='name'>CSS3</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/dart.png')} alt='Dart' id='tech-image' />
                  <h3 id='tech-title' className='name'>Dart</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/docker.png')} alt='Docker' id='tech-image' />
                  <h3 id='tech-title' className='name'>Docker</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/es6.png')} alt='ES6' id='tech-image' />
                  <h3 id='tech-title' className='name'>ES6</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/expressjs.png')} alt='ExpressJS' id='tech-image' />
                  <h3 id='tech-title' className='name'>ExpressJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/figma.png')} alt='Figma' id='tech-image' />
                  <h3 id='tech-title' className='name'>Figma</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/firebase.png')} alt='Firebase' id='tech-image' />
                  <h3 id='tech-title' className='name'>Firebase</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/flutter.png')} alt='Flutter' id='tech-image' />
                  <h3 id='tech-title' className='name'>Flutter</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/gimp.png')} alt='GIMP' id='tech-image' />
                  <h3 id='tech-title' className='name'>GIMP</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/git.png')} alt='Git' id='tech-image' />
                  <h3 id='tech-title' className='name'>Git</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/golang.png')} alt='Golang' id='tech-image' />
                  <h3 id='tech-title' className='name'>Golang</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/html5.png')} alt='HTML5' id='tech-image' />
                  <h3 id='tech-title' className='name'>HTML5</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/java.png')} alt='Java' id='tech-image' />
                  <h3 id='tech-title' className='name'>Java</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/javascript.png')} alt='JavaScript' id='tech-image' />
                  <h3 id='tech-title' className='name'>JavaScript</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/kotlin.png')} alt='Kotlin' id='tech-image' />
                  <h3 id='tech-title' className='name'>Kotlin</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/loopback.png')} alt='Loopback' id='tech-image' />
                  <h3 id='tech-title' className='name'>Loopback</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/materialdesign.png')} alt='Material Design' id='tech-image' />
                  <h3 id='tech-title' className='name'>Material Design</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/mongodb.png')} alt='MongoDB' id='tech-image' />
                  <h3 id='tech-title' className='name'>MongoDB</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/mysql.png')} alt='MySQL' id='tech-image' />
                  <h3 id='tech-title' className='name'>MySQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/nodejs.png')} alt='NodeJS' id='tech-image' />
                  <h3 id='tech-title' className='name'>NodeJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/photoshop.png')} alt='Photoshop' id='tech-image' />
                  <h3 id='tech-title' className='name'>Photoshop</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/postgresql.png')} alt='PostgreSQL' id='tech-image' />
                  <h3 id='tech-title' className='name'>PostgreSQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/python.png')} alt='Python' id='tech-image' />
                  <h3 id='tech-title' className='name'>Python</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/react.png')} alt='React' id='tech-image' />
                  <h3 id='tech-title' className='name'>React</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/spring.png')} alt='Spring' id='tech-image' />
                  <h3 id='tech-title' className='name'>Spring</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Technologies;
