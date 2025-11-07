import React, { useState } from 'react';
import './Resume.css'; // Import CSS file

function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);
    
    // Reset animation after it completes
    setTimeout(() => {
      setIsDownloading(false);
    }, 2500);
  };

  return (
    <div className="resume-container">
      <h2>Download Resume</h2>
      <hr />
      <br />
      <p>Click the button below to download my resume in PDF format.</p>
      {/* Change file id on updating the file */}
      <a 
        href="https://drive.google.com/uc?export=download&id=10AI0mzwXSsKatVnBzAxhQQPs95WxBbye" 
        rel="noopener noreferrer"
        className={`download-btn ${isDownloading ? 'downloading' : ''}`}
        onClick={handleDownload}
      >
        <span className="btn-text">Download Resume</span>
        <span className="truck-animation">
          <svg className="truck" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
            <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"/>
          </svg>
          <span className="document">📄</span>
        </span>
      </a>
    </div>
  );
}

export default Resume;
