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
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("Projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading publications:", error));
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

    const cards = document.querySelectorAll('.ProjectCard');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [projects]);

  return (
    <div className="PublicationsPage">
      <h2>My Projects</h2>
      <hr />
      <br />
      <div className="PublicationsList">
        {projects.map((proj, index) => (
          <div 
            key={index} 
            className={`PublicationCard ProjectCard ${revealedCards.has(index) ? 'revealed' : ''}`}
            data-index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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

