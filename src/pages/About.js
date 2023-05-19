import React from 'react'
import "./pages_css/About.css"


const About = () => {
  return (
    <div id="aboutMargin">
    <img className="aboutImage" src="https://imgur.com/x33b0yt.png" alt="selfie"/>
    <div className="aboutContainer">
      <h2 className="aboutTitle"> About Me 🎨 </h2>
      <p className="aboutParagraph">Software developer specializing in full stack JavaScript technologies. Obtained a certificate from General Assembly’s Software Engineering program. Worked on multiple teams to develop full stack applications. Prior to software development I have experience in mechanical engineering. Looking to leverage my unique background and knowledge in software development to ensure the delivery of quality products.</p>
      <h2 className="aboutTitle"> Technical Skills ⚡ </h2>
      <p className="aboutParagraph"> Languages - JavaScript | Python | SQL | Mongo | JSON | EJS | HTML | CSS <br />
        Libraries and Frameworks - React.js | Express.js | Django | Flask <br />
        Databases - PostgreSQL | MongoDB </p>
    </div>
    </div>
  )
}

export default About