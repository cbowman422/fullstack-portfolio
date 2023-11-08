import React from 'react'
import "./pages_css/About.css"

// for logos
// https://dev.to/tolentinoel/customized-tech-stack-badges-for-your-profile-1dpg

const About = () => {
  return (
    <div id="aboutMargin">
    <img className="aboutImage" src="https://imgur.com/x33b0yt.png" alt="selfie"/>
    <div className="aboutContainer">
      <h2 className="aboutTitle"> About Me </h2>
      <p className="aboutParagraph"> Software engineer with an aptitude for learning new skills quickly. Strong team player who has contributed to multiple teams and helped drive the design and development of many full-stack applications. In addition to software development, I have gained valuable experience in solving difficult and ambiguous problems as a mechanical engineer. Motivated self-starter committed to continuous improvement and staying up-to-date with industry trends. Seeking to leverage my engineering experience to drive innovation and contribute to impactful projects. </p>
      <h2 className="aboutTitle"> Technical Skills </h2>
       
       <div className="aboutImages">
        <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=Javascript&logoColor=000000&style=for-the-badge" alt="JavaScript"/>
        <img src="https://img.shields.io/badge/-Python-3776AB?logo=Python&logoColor=ffffff&style=for-the-badge" alt="Python"/>
        <img src="https://img.shields.io/badge/-Java-5382a1?logo=Java&logoColor=ffffff&style=for-the-badge" alt="Java"/>
        <img src="https://img.shields.io/badge/-C-A8B9CC?logo=c&logoColor=000000&style=for-the-badge" alt="C"/>
        <img src="https://img.shields.io/badge/-C++-00599C?logo=cplusplus&logoColor=ffffff&style=for-the-badge" alt="C++"/>
        <img src="https://img.shields.io/badge/-php-777BB4?logo=php&logoColor=ffffff&style=for-the-badge" alt="C++"/>
        <img src="https://img.shields.io/badge/-HTML5-E34F26?logo=HTML5&logoColor=ffffff&style=for-the-badge" alt="HTML5"/>
        <img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3&logoColor=ffffff&style=for-the-badge" alt="CSS3"/>
        <img src="https://img.shields.io/badge/-JSON-000000?logo=JSON&logoColor=ffffff&style=for-the-badge" alt="JSON"/>
        <img src="https://img.shields.io/badge/-WordPress-21759B?logo=WordPress&logoColor=ffffff&style=for-the-badge" alt="WordPress"/>
        <img src="https://img.shields.io/badge/-Webflow-4353FF?logo=Webflow&logoColor=ffffff&style=for-the-badge" alt="Webflow"/>
        <br/>
        <img src="https://img.shields.io/badge/-React.js-61DAFB?logo=React&logoColor=000000&style=for-the-badge" alt="React"/>
        <img src="https://img.shields.io/badge/-Next.js-000000?logo=Next.js&logoColor=ffffff&style=for-the-badge" alt="Next.js"/>
        <img src="https://img.shields.io/badge/-Express.js-000000?logo=Express&logoColor=ffffff&style=for-the-badge" alt="Express.js"/>
        <img src="https://img.shields.io/badge/-Django-092E20?logo=Django&logoColor=ffffff&style=for-the-badge" alt="Django"/>
        <img src="https://img.shields.io/badge/-Flask-000000?logo=Flask&logoColor=ffffff&style=for-the-badge" alt="Flask"/>
        <img src="https://img.shields.io/badge/-Figma-F24E1E?logo=Figma&logoColor=ffffff&style=for-the-badge" alt="Figma"/>
        <br/>
        <img src="https://img.shields.io/badge/-Amazon AWS-232F3E?logo=Amazon AWS&logoColor=ffffff&style=for-the-badge" alt="Amazon AWS"/>
        <img src="https://img.shields.io/badge/-PostgreSQL-4169E1?logo=PostgreSQL&logoColor=ffffff&style=for-the-badge" alt="PostgreSQL"/>
        <img src="https://img.shields.io/badge/-MongoDB-47A248?logo=MongoDB&logoColor=ffffff&style=for-the-badge" alt="MongoDB"/>
       </div>


    </div>
    </div>
  )
}

export default About

