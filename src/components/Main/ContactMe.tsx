import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation for email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format");
      return;
    }

    // Validation for mobile (example check: numeric and length between 10-15)
    const mobileRegex = /^[0-9]{9,15}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Invalid mobile number");
      return;
    }

    // Prepare data to send to Google Sheets
    const dataToSend = {
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };
    const response = await fetch("/.netlify/functions/contact-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToSend),
    });
    
    const result = await response.json();
    alert(result.message || "Message sent!");
    
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <hr />
      <div className="ContactContent">
        <p>
          Fellow Developers, Recruiters and Friends! Use this section to leave feedback or contact me!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit &gt;</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
