import React from 'react'
import "./pages_css/About.css"


const About = () => {
  return (
    <div className="aboutMargin">
    <div className="aboutContainer">
      <h1 className="aboutTitle"> About me</h1>
      <p className="aboutParagraph"> With a passion for art and a degree in mechanical engineering. Some of my hobbies besides programming include painting, mathematics, being a good role model for my dog, creating music, rock climbing, and skiing.</p>
      <h1 className="aboutTitle"> Technical Skills</h1>
      <p className="aboutParagraph"> Languages - Typescript | Python | JavaScript | SQL | Mongo | JSON | EJS | HTML | CSS | MATLAB | Arduino <br />
Databases - PostgreSQL | MongoDB <br />
Libraries and Frameworks - React.js | Express.js | Django | Flask <br />
Softwares - ABAQUS | Altair HyperWorks | ANSYS | Fluent | SolidWorks | Mathcad | Microsoft Office <br />
Interpersonal Skills - Communication Skills | Collaboration  </p>
    </div>
    </div>
  )
}

export default About