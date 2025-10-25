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

  useEffect(() => {
    fetch("Experience.json")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Failed to load experience:", err));
  }, []);

  return (
    <div className="ExperiencePage">
      <h2>Experience</h2>
      <hr />
      <br />
      <div className="ExperienceList">
        {experiences.map((exp, index) => (
         <div className="ExperienceCard">
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
