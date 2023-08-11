import React from 'react'
import "./pages_css/About.css"


const About = () => {
  return (
    <div id="aboutMargin">
    <img className="aboutImage" src="https://imgur.com/x33b0yt.png" alt="selfie"/>
    <div className="aboutContainer">
      <h2 className="aboutTitle"> About Me </h2>
      <p className="aboutParagraph">Motivated software engineer with a strong focus on full stack JavaScript technologies. Contributed to multiple teams, collectively designing and developing full stack applications. Prior to software development I gained valuable experience in mechanical engineering. Committed to continuous learning and staying up-to-date with industry trends. Seeking to leverage my experience in software engineering to drive innovation and contribute to impactful projects.</p>
      <h2 className="aboutTitle"> Technical Skills </h2>
      <p className="aboutParagraph"> Languages - JavaScript | Python | SQL | Mongo | JSON | EJS | HTML | CSS <br />
        Libraries and Frameworks - React.js | Next.js | Express.js | Django | Flask <br />
        Databases - AWS | PostgreSQL | MongoDB </p>
    </div>
    </div>
  )
}

export default About