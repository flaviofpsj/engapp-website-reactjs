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
                  <img className='img-fluid' src={require('./../img/aws.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>AWS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/bootstrap4.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Bootstrap 4</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/c++.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>C++</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/css3.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>CSS3</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/dart.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Dart</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/docker.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Docker</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/es6.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>ES6</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/expressjs.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>ExpressJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/figma.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Figma</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/firebase.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Firebase</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/flutter.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Flutter</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/gimp.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>GIMP</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/git.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Git</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/golang.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Golang</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/html5.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>HTML5</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/java.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Java</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/javascript.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>JavaScript</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/kotlin.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Kotlin</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/loopback.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Loopback</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/materialdesign.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Material Design</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/mongodb.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>MongoDB</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/mysql.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>MySQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/nodejs.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>NodeJS</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/photoshop.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Photoshop</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/postgresql.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>PostgreSQL</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/python.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>Python</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/react.png')} id='tech-image' />
                  <h3 id='tech-title' className='name'>React</h3>
                </div>
              </div>
              <div className='col-sm-6 col-md-4 col-lg-3 item' data-aos='fade-up'>
                <div className='box'>
                  <img className='img-fluid' src={require('./../img/spring.png')} id='tech-image' />
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
