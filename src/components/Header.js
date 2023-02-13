import { Link } from "react-router-dom";
import "./componenets_css/Header.css";


function Header(props) {
  //inline style for the nav tag

  return (
    <nav className="headerNav">
      <nav className="headerNavLinks">
      <Link className="headerLink" to="/">
          <div className="headerLinkTag" >HOME</div>
        </Link>
        <Link className="headerLink" to="/about">
          <div className="headerLinkTag" >ABOUT ME</div>
        </Link>
        <Link className="headerLink" to="/projects">
          <div className="headerLinkTag" >PROJECTS</div>
        </Link>
        <Link className="headerLink" to="/contact">
          <div className="headerLinkTag" >CONTACT</div>
        </Link>
      </nav>
    </nav>
  );
}

export default Header;