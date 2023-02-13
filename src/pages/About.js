import React from 'react'
import "./pages_css/About.css"


const About = () => {
  return (
    <div className="aboutMargin">
    <img className="aboutImage" src="https://imgur.com/AhC28Z9.png" alt="photo"></img>
    <div className="aboutContainer">
      <h2 className="aboutTitle"> About me 🎨 </h2>
      <p className="aboutParagraph"> Seeking a position in full stack development, incorporating my versatile experience in software and mechanical engineering and my passion for art. Creative, highly-motivated, and adaptable professional who is able to work with stakeholders to create useful and user-friendly applications. Outside of work, I enjoy painting, creating music, and spending time outdoors. </p>
      <h2 className="aboutTitle"> Technical Skills ⚡ </h2>
      <p className="aboutParagraph"> Languages - Typescript | Python | JavaScript | SQL | Mongo | JSON | EJS | HTML | CSS | MATLAB | Arduino <br />
Databases - PostgreSQL | MongoDB <br />
Libraries and Frameworks - React.js | Express.js | Django | Flask <br />
Softwares - ABAQUS | Altair HyperWorks | ANSYS | Fluent | SolidWorks | Mathcad <br />
Interpersonal Skills - Communication Skills | Collaboration  </p>
    </div>
    </div>
  )
}

export default About