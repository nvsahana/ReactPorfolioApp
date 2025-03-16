// import React from 'react';

// function Publications() {
//   return (
//     <>

//     </>
//   );
// }

// export default Publications;
import React, { useState, useEffect } from "react";
import "./Projects.css"; // Create a CSS file for styling

interface Project {
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading publications:", error));
  }, []);

  return (
    <div className="PublicationsPage">
      <h2>My Projects</h2>
      <hr />
      <br />
      <div className="PublicationsList">
        {projects.map((proj, index) => (
          <div key={index} className="PublicationCard">
            <div className="Title">
              <h3>{proj.title} </h3>
            </div>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

