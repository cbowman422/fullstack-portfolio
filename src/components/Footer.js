import "./componenets_css/Footer.css";

import resume from '../Pdf/Christopher_Bowman_Resume.pdf';

function Footer(props) {
  return <div id="footerBackground"> 

    <div className="footerContainer">
    <a className="footerLinkTag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/cbowman422/"> LinkedIn</a>
    <a className="footerLinkTag" target="_blank" rel="noreferrer" href="https://github.com/cbowman422"> Github</a>
    <a className="footerLinkTag" href={resume} target="_blank" rel="noreferrer" download>Resume</a>
    </div>;
  </div>
  }

export default Footer;