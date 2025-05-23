import React from 'react';
import "./Main.css";
import sahana from "./assets/Sahana.jpeg";
import Publications from './Publications';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Resume from './Resume';
import Skills from './Skills';
import Experience from './Experience';
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
function Main() {
  return (
    <>
    <section id="Home">
        <div className='MainPage'>
          <div className='MainFlexContainer'>
            <div className='LeftFlex FlexBlock'>
              <div className="LeftFlexContent">
                <h1>Sahana Narasipura Vasudevarao</h1>
                <p style={{fontFamily:"Courier New"}}>I am a full-stack developer with experience in software development, AI, and cloud computing. Having worked at Toyz Electronics, Bosch, and iConsult, I specialize in Java, Python, React, and AWS. My focus is on building scalable applications, optimizing databases, and developing AI-driven solutions to enhance efficiency and innovation.</p>
                <div className="LeftButton">
                {/* <StyledButton text="Let's get Started" to="/publications" /> */}
                <button className="styled-button" onClick={() => handleThis('Publication')}>
                  Let’s get started <span className="arrow">➤</span>
                </button>
                </div>
              </div>
            </div>
            <div className="RightFlex FlexBlock">
              <div className="ImageContainer">
                <img src={sahana} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Experience"><Experience /></section>
      <section id="Publication"><Publications /></section>
      <section id="Projects"><Projects /></section>
      <section id="Skills"><Skills /></section>
      <section id="contactSahana"><ContactMe /></section>
      <section id="resume"><Resume /></section>
    </>
  );
}

export default Main;
