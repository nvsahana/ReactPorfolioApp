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

  useEffect(() => {
    fetch("publications.json")
      .then((response) => response.json())
      .then((data) => setPublications(data))
      .catch((error) => console.error("Error loading publications:", error));
  }, []);

  return (
    <div className="PublicationsPage">
      <h2>My Publications</h2>
      <hr />
      <br />
      <div className="PublicationsList">
        {publications.map((pub, index) => (
          <div key={index} className="PublicationCard">
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

