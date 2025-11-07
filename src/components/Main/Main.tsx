import React, { useEffect } from 'react';
import "./Main.css";
import sahana from "./assets/Sahana.jpeg";
import Publications from './Publications';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import Experience from './Experience';
import useReveal from '../../hooks/useReveal';
import Typewriter from './Typewriter';

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  console.log(section)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    console.log("It works, check again!")
  }
};

// Styled Button Component (embedded in Main.tsx)
// const StyledButton: React.FC<ButtonProps> = ({ text, to }) => {
//   return (
//     <Link to={to} className="styled-button" style={{textDecoration: 'None'}}>
//     {text} <span className="arrow">›</span>
//   </Link>
//   );
// };

const handleThis = (id: string) => {
  console.log("Reached me")
  scrollToSection(id);
}

const createParticles = () => {
  const particlesContainer = document.querySelector('.particles-container');
  if (!particlesContainer) return;

  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 15;
    
    particle.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;
    
    particlesContainer.appendChild(particle);
  }
};

function Main() {
  // kick off reveal observer for elements with data-reveal
  useReveal();

  useEffect(() => {
    createParticles();
  }, []);

  return (
    <>
    <section id="Home">
        <div className='MainPage'>
          <div className="particles-container"></div>
          <div className='MainFlexContainer'>
            <div className='LeftFlex FlexBlock reveal' data-reveal>
              <div className="LeftFlexContent">
                <h1 className="hero-title">Sahana Narasipura Vasudevarao</h1>
                <h2 className="hero-subtitle">I build beautiful, performant interfaces — <Typewriter words={["Frontend Engineer","Full-stack Developer","AI & Cloud enthusiast"]} speed={80} /></h2>
                <p className="hero-blurb">I craft delightful user experiences with React, TypeScript, and modern web tooling. Previously at Toyz Electronics, Bosch, and iConsult.</p>
                <div className="LeftButton">
                <button className="styled-button" onClick={() => handleThis('Experience')}>
                  See My Work <span className="arrow">➤</span>
                </button>
                </div>
              </div>
            </div>
            <div className="RightFlex FlexBlock reveal" data-reveal>
              <div className="ImageContainer">
                <div className="blob" aria-hidden="true">
                  <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stop-color="#00d4ff" stop-opacity="0.5" />
                        <stop offset="100%" stop-color="#4CAF50" stop-opacity="0.4" />
                      </linearGradient>
                    </defs>
                    <g opacity="0.9"><path d="M71.8,15C112-10,236-20,302.6,18.1C369.1,56.1,377.7,140,356.3,195.7C334.9,251.4,287.6,274.6,233.9,303.1C180.2,331.6,99,375.3,51.9,338.4C4.8,301.4,12.6,200.9,29.2,141.7C45.8,82.6,31.6,40,71.8,15Z" fill="url(#g1)"/></g>
                  </svg>
                </div>
                <img src={sahana} alt="Sahana portrait" className="hero-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
  <section id="Experience" className="reveal" data-reveal><Experience /></section>
  <section id="Publication" className="reveal" data-reveal><Publications /></section>
  <section id="Projects" className="reveal" data-reveal><Projects /></section>
  <section id="Skills" className="reveal" data-reveal><Skills /></section>
  <section id="contactSahana" className="reveal" data-reveal><ContactMe /></section>
  <section id="resume" className="reveal" data-reveal><Resume /></section>
    </>
  );
}

export default Main;
