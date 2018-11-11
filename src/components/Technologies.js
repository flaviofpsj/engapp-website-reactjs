import React, { Component } from 'react';

import TechnologiesItem from './TechnologiesItem';

class Technologies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/technologies.png?alt=media&token=59c8f557-6fb4-4be9-ad27-3269182625b1)`,
        backgroundPosition: 'center', backgroundSize: 'cover',
      },
      technologies: [
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/aws.png?alt=media&token=54a5bb52-07cd-4e1d-b0e2-924cc0987357',
          title: 'AWS'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/bootstrap4.png?alt=media&token=38d71f44-6a18-4556-9344-c5523a8d2e70',
          title: 'Bootstrap 4'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/c%2B%2B.png?alt=media&token=f3d8a111-8ca5-4550-a885-5eeaf45a28e4',
          title: 'C++'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/css3.png?alt=media&token=a532fdaa-c74e-4ff3-9cb8-34fc6cc41105',
          title: 'CSS3'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/dart.png?alt=media&token=442224d7-eab9-4d66-b6eb-cd827322e725',
          title: 'Dart'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/docker.png?alt=media&token=739f5717-843f-45eb-9eb4-c9c672d2431d',
          title: 'Docker'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/es6.png?alt=media&token=93e63c0c-cc38-4891-9877-e3980b6b24cd',
          title: 'ES6'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/expressjs.png?alt=media&token=9d7af366-d4d3-4665-bc92-718f988d68fe',
          title: 'ExpressJS'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/figma.png?alt=media&token=e803fd79-f222-4378-9530-dd511d240a51',
          title: 'Figma'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/firebase.png?alt=media&token=4fe2665f-3e9f-4e18-97ba-80004dc44108',
          title: 'Firebase'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/flutter.png?alt=media&token=1bed6dda-ce6f-41ab-818a-ecac1506cbd6',
          title: 'Flutter'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/gimp.png?alt=media&token=abd03b21-5359-4f1e-ad95-1a67fddbd90e',
          title: 'GIMP'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/git.png?alt=media&token=108cb125-6e3c-4897-95bc-319c7375f11a',
          title: 'Git'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/golang.png?alt=media&token=a248e2db-44f5-4116-8000-cf2c7a0bd353',
          title: 'Golang'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/html5.png?alt=media&token=fb52e281-91fe-4569-90ff-a6cc0e141053',
          title: 'HTML5'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/java.png?alt=media&token=288e798f-a821-4c01-8872-47f2107e6749',
          title: 'Java'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/javascript.png?alt=media&token=4d3ba893-a184-4185-88f4-07ba5c556ecf',
          title: 'JavaScript'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/kotlin.png?alt=media&token=40abee88-cbce-40f5-a460-958a5f0e982c',
          title: 'Kotlin'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/loopback.png?alt=media&token=fe24c6bd-1898-49b3-85bb-0d4775a276b6',
          title: 'Loopback'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/materialdesign.png?alt=media&token=a95bb525-ce25-4968-b967-d4d94b688b10',
          title: 'Material Design'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/mongodb.png?alt=media&token=cb8e6517-2fbf-4aad-8af9-a8bbf485f7e6',
          title: 'MongoDB'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/mysql.png?alt=media&token=9f249ad4-918e-42bb-894f-a82c7b677e3a',
          title: 'MySQL'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/nodejs.png?alt=media&token=6a44c769-74b3-4d87-9a72-5dbfcdbe323b',
          title: 'NodeJS'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/photoshop.png?alt=media&token=2ebd1282-b827-4b43-988a-fc6e57f56a56',
          title: 'Photoshop'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/postgresql.png?alt=media&token=0e9effe7-4028-48dc-b229-5e3449148adb',
          title: 'PostgreSQL'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/python.png?alt=media&token=355e7d5d-1ffd-4a4c-9478-49f91f63a59a',
          title: 'Python'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/react.png?alt=media&token=745ef33d-8137-4f50-9a19-c1c6e2b1b59f',
          title: 'React'
        },
        {
          url: 'https://firebasestorage.googleapis.com/v0/b/engapp-website-reactjs.appspot.com/o/spring.png?alt=media&token=e026dff4-b4d6-425a-ab25-8940455bd42e',
          title: 'Spring'
        },
      ]
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style={this.state.style} data-bs-parallax-bg='true' id='tecnologias'>
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
