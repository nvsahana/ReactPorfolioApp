// import React from 'react';

// function Publications() {
//   return (
//     <>

//     </>
//   );
// }

// export default Publications;
import React, { useState, useEffect } from "react";
import "./Publications.css"; // Create a CSS file for styling
import { FaExternalLinkAlt } from "react-icons/fa";

interface Publication {
  title: string;
  description: string;
  link: string;
}

const Publications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [revealedCards, setRevealedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch("publications.json")
      .then((response) => response.json())
      .then((data) => setPublications(data))
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

    const cards = document.querySelectorAll('.PublicationCard');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [publications]);

  return (
    <div className="PublicationsPage">
      <h2>My Publications</h2>
      <hr />
      <br />
      <div className="PublicationsList">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className={`PublicationCard ${revealedCards.has(index) ? 'revealed' : ''}`}
            data-index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="Title">
              <h3>{pub.title} </h3>
              <a href={pub.link} style={{textDecoration: "None", color:"wheat"}}>
                <FaExternalLinkAlt style={{paddingLeft: 10}}/>
              </a>
            </div>
            <p>{pub.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;

