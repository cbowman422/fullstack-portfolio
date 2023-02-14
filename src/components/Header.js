// import { Link } from "react-router-dom";
import "./componenets_css/Header.css";


function Header(props) {
  //inline style for the nav tag


  function scrollToHome()
	{
    document.getElementById('homeContainer').scrollIntoView({
			behavior:"smooth"
		});
	}

  function scrollToAbout()
	{
    document.getElementById('aboutMargin').scrollIntoView({
			behavior:"smooth"
      
		});
	}

  function scrollToProject()
	{
    document.getElementById('projectScroll').scrollIntoView({
			behavior:"smooth"
      
		});
	}

  function scrollToContact()
	{
    document.getElementById('contactWrap').scrollIntoView({
			behavior:"smooth"
      
		});
	}

 


  return (
    <nav className="headerNav">
      <nav className="headerNavLinks">
      <a className="headerLink" >
          <div className="headerLinkTag" onClick={scrollToHome} >HOME</div>
        </a>
        <a className="headerLink" onClick={scrollToAbout}>
          <div className="headerLinkTag" >ABOUT ME</div>
        </a>
        <a className="headerLink" onClick={scrollToProject} >
          <div className="headerLinkTag" >PROJECTS</div>
        </a>
        <a className="headerLink" onClick={scrollToContact}>
          <div className="headerLinkTag" >CONTACT</div>
        </a>
      </nav>
    </nav>
  );
}

export default Header;