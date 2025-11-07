import React, { useState, useEffect } from "react";
import "./Experience.css";

interface ExperienceClass {
  
  empName: string;
  position: string;
  description: string;
  period: string;
  eImage: string;
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceClass[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("Experience.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Failed to load experience:", err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setRevealedCards(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = document.querySelectorAll('.ExperienceCard');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [experiences]);

  return (
    <div className="ExperiencePage">
      <h2>Experience</h2>
      <hr />
      <br />
      <div className="ExperienceList">
        {experiences.map((exp, index) => (
         <div 
           key={index}
           className={`ExperienceCard ${revealedCards.has(index) ? 'revealed' : ''}`}
           data-index={index}
           style={{ animationDelay: `${index * 0.15}s` }}
         >
          <div className="ExperienceContainer">
            <div className="LogoColumn">
              <img src={exp.eImage} alt={`${exp.empName} logo`} className="EmployerLogo" />
            </div>

            <div className="DetailsColumn">
              <div className="TopRow">
                <h3 className="JobTitle">{exp.position}</h3>
                <span className="Period">{exp.period}</span>
              </div>
              <strong className="EmployerName">{exp.empName}</strong>
              <p className="Description">
                {exp.description.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
