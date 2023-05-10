import React from 'react'
import "./pages_css/About.css"


const About = () => {
  return (
    <div id="aboutMargin">
    <img className="aboutImage" src="https://imgur.com/x33b0yt.png" alt="selfie"/>
    <div className="aboutContainer">
      <h2 className="aboutTitle"> About Me 🎨 </h2>
      <p className="aboutParagraph"> Software developer specializing in full stack JavaScript technologies. Obtained a Software Engineering Immersive certificate from the General Assembly bootcamp. Worked on multiple teams to develop full stack applications to provide unique perspectives and experience. Prior to software development I completed my Bachelors degree in Mechanical Engineering from the University of Massachusetts, Amherst and worked as a Structural Engineer for General Dynamics. Looking to leverage my unique experiences and knowledge in software development to ensure the delivery of quality products. </p>
      <h2 className="aboutTitle"> Technical Skills ⚡ </h2>
      <p className="aboutParagraph"> Languages - JavaScript | Python | SQL | Mongo | JSON | EJS | HTML | CSS | MATLAB <br />
Databases - PostgreSQL | MongoDB <br />
Libraries and Frameworks - React.js | Express.js | Django <br />
Interpersonal Skills - Communication Skills | Collaboration  </p>
    </div>
    </div>
  )
}

export default About