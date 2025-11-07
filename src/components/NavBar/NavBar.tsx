import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { hover } from "@testing-library/user-event/dist/hover";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTransparent, setNavTransparent] = useState(false);

  // Detect scroll and change navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavTransparent(true);
      } else {
        setNavTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  /* If an menu option is selected, close the nav bar menu */
  const handleLinkClick = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
    };

  return (
    <>
      <div className={`NavBarStart ${navTransparent ? "transparent" : ""}`}>
        <div className="block block1"></div>

        {/* Hamburger Menu Button */}
        <button className="hamburger" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        

        {/* Navigation Links */}
        <div className={`block block2 ${menuOpen ? "open" : ""}`}>
        <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('Home')} style={{border: "None"}}>
            Home
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('Experience')} style={{border: "None"}}>
            Experience
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('Publication')} style={{border: "None"}}>
            Publications
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('Projects')} style={{border: "None"}}>
            Projects
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('Skills')} style={{border: "None"}}>
            Skills
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('contactSahana')} style={{border: "None"}}>
            Get in Touch
          </button>
          <button className="navBlock navBlock2 NavLink" onClick={() => handleLinkClick('resume')} style={{border: "None"}}>
            Resume
          </button>
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
