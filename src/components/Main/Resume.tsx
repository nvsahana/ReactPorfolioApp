import React from 'react';
import './Resume.css'; // Import CSS file

function Resume() {
  return (
    <div className="resume-container">
      <h2>Download Resume</h2>
      <hr />
      <p style={{color:"wheat"}}>Click the button below to download my resume in PDF format.</p>
      {/* Change file id on updating the file */}
      <a 
        href="https://drive.google.com/uc?export=download&id=10AI0mzwXSsKatVnBzAxhQQPs95WxBbye" 
        rel="noopener noreferrer"
        className="download-btn"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
