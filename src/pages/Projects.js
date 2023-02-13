import { useState, useEffect } from "react";
import "./pages_css/Projects.css";

function Projects(props) {
 

  /*
{
  "name": "War Card Game - HTML | CSS | JavaScript",
  "live": "https://cb-war-card-game.netlify.app",
  "git": "https://github.com/cbowman422/Project-1-War-CardGame",
  "image": "https://imgur.com/d8WEw2F.jpg",
  "description" : "An app that allows you to play the card game war online! Using only HTML, CSS, JS, and DOM manipulation."
},
{
  "name": "Tic Tac Toe Game - HTML | CSS | JavaScript",
  "live": "https://project-0-tictactoe.netlify.app/",
  "git": "https://github.com/cbowman422/Project-0-TTT",
  "image": "https://imgur.com/P6uPNNL.jpg",
  "description" : "Play Tic Tac Toe against a computer or another player!"
}
*/
 // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    
		//make api call and get response
    const response = await fetch("./projects.json");
    
		// turn response into javascript object
    const data = await response.json();
    
		// set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData()
  },[]);

// TODO this is the scroll up function that was removed
  // // Function to scroll down in Home screen from click.
	// function scrollToList()
	// {
	// 	window.scrollTo(
	// 	{
	// 		top: 10,
	// 		behavior:"smooth"
	// 	})
	// }


  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, keyProject) => (
      <div className="projectContainer" key={keyProject} >
        <h1 className="projectName">{project.name}</h1>
        <img className='projectImg' src={project.image} />
        <p className="projectDesc">{project.description}</p>
        <div className="projectButtonDiv">
          <a href={project.git} target="_blank">
            <button className="githubButton">Github</button>
          </a>
          <a href={project.live} target="_blank">
            <button className="liveButton">Live Site</button>
          </a>
        </div>
      </div>
    ));
  };

  return <>
  <section className="projectsGrid">
  {projects ? loaded() : <h1>Loading...</h1>}
  </section>
  </>
}

export default Projects;