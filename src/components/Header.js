import { Link } from "react-router-dom";
import "./Header.css";


function Header(props) {
  //inline style for the nav tag

  return (
    <header className="headerNav">
      <nav className="headerLink">
      <Link to="/">
          <div className="linkTag" >HOME</div>
        </Link>
        <Link to="/projects">
          <div className="linkTag" >PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div className="linkTag" >CONTACT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;