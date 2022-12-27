import { Link } from "react-router-dom";
import "./Header.css";


function Header(props) {
  //inline style for the nav tag

  return (
    <header className="headerNav">
      <nav className="headerLink">
      <Link className="headerLinkLine" to="/">
          <div className="headerLinkTag" >HOME</div>
        </Link>
        <Link className="headerLinkLine" to="/projects">
          <div className="headerLinkTag" >PROJECTS</div>
        </Link>
        <Link className="headerLinkLine" to="/contact">
          <div className="headerLinkTag" >CONTACT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;