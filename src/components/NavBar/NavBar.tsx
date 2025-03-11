import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  /* If an menu option is selected, close the nav bar menu */
  const handleLinkClick = () => {
    setMenuOpen(false);
    };

  return (
    <>
      <div className="NavBarStart">
        <div className="block block1"></div>

        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        

        {/* Navigation Links */}
        <div className={`block block2 ${menuOpen ? "open" : ""}`}>
          <Link to="/home" className="navBlock navBlock1 NavLink" onClick={handleLinkClick}>Home</Link>
          <Link to="/publications" className="navBlock navBlock2 NavLink" onClick={handleLinkClick}>Publications</Link>
          <Link to="/Projects" className="navBlock navBlock4 NavLink" onClick={handleLinkClick}>Projects</Link>
          <Link to="/contact-sahana" className="navBlock navBlock5 NavLink" onClick={handleLinkClick}>Get In Touch</Link>
          <Link to="/Resume" className="navBlock navBlock6 NavLink" onClick={handleLinkClick}>Full Resume</Link>
          <div className="navBlock navBlock3 NavLink">
            <div> 
              <a href="https://www.linkedin.com/in/nvsahana/"><span><FaLinkedin size={30}/></span></a>
            </div>
            <div> 
              <a href="https://github.com/nvsahana"><span><FaGithub size={30}/></span></a>
            </div>
            
          </div>
        </div>

        <div className="block block3"></div>
      </div>
    </>
  );
}

export default NavBar;
