import React, { useState, useEffect } from "react";
import "./Experience.css";

interface Experience {
  
  empName: string;
  position: string;
  description: string;
  period: string;
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

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
          <div key={index} className="ExperienceCard">
            <div className="Header">
              <h3>{exp.position}</h3>
              <span className="Period">{exp.period}</span>
            </div>
            <strong>{exp.empName}</strong>
            <br />
            <br />
            <p className="Description">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
