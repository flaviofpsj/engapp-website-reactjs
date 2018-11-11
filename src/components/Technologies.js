import React, { Component } from 'react';

import TechnologiesHeader from './../img/technologies.png';

import TechnologiesItem from './TechnologiesItem';

class Technologies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      technologies: [
        {url: require('./../img/aws.png'), title: 'AWS'},
        {url: require('./../img/bootstrap4.png'), title: 'Bootstrap 4'},
        {url: require('./../img/c++.png'), title: 'C++'},
        {url: require('./../img/css3.png'), title: 'CSS3'},
        {url: require('./../img/dart.png'), title: 'Dart'},
        {url: require('./../img/docker.png'), title: 'Docker'},
        {url: require('./../img/es6.png'), title: 'ES6'},
        {url: require('./../img/expressjs.png'), title: 'ExpressJS'},
        {url: require('./../img/figma.png'), title: 'Figma'},
        {url: require('./../img/firebase.png'), title: 'Firebase'},
        {url: require('./../img/flutter.png'), title: 'Flutter'},
        {url: require('./../img/gimp.png'), title: 'GIMP'},
        {url: require('./../img/git.png'), title: 'Git'},
        {url: require('./../img/golang.png'), title: 'Golang'},
        {url: require('./../img/html5.png'), title: 'HTML5'},
        {url: require('./../img/java.png'), title: 'Java'},
        {url: require('./../img/javascript.png'), title: 'JavaScript'},
        {url: require('./../img/kotlin.png'), title: 'Kotlin'},
        {url: require('./../img/loopback.png'), title: 'Loopback'},
        {url: require('./../img/materialdesign.png'), title: 'Material Design'},
        {url: require('./../img/mongodb.png'), title: 'MongoDB'},
        {url: require('./../img/mysql.png'), title: 'MySQL'},
        {url: require('./../img/nodejs.png'), title: 'NodeJS'},
        {url: require('./../img/photoshop.png'), title: 'Photoshop'},
        {url: require('./../img/postgresql.png'), title: 'PostgreSQL'},
        {url: require('./../img/python.png'), title: 'Python'},
        {url: require('./../img/react.png'), title: 'React'},
        {url: require('./../img/spring.png'), title: 'Spring'},
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundImage: `url(${ TechnologiesHeader })`, backgroundPosition: 'center', backgroundSize: 'cover' }} data-bs-parallax-bg='true' id='tecnologias'>
          <h1 className='text-white' id='bottom-titles'>Tecnologias</h1>
        </div>
        <div className='features-boxed'>
          <div className='container'>
            <div className='row justify-content-center features'>
              {
                Object.keys(this.state.technologies).map(index => {
                  return(
                    <TechnologiesItem key={index} content={this.state.technologies[index]} />
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

export default Technologies;
