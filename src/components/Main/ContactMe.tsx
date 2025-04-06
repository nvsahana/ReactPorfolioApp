import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format");
      return;
    }

    const mobileRegex = /^[0-9]{9,15}$/;
    if (!mobileRegex.test(formData.mobile)) {
      alert("Invalid mobile number");
      return;
    }

    try {
      await emailjs.send(
        "service_fx1vuaq",    // from EmailJS dashboard
        "template_kai98dx",   // from EmailJS dashboard
        {
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          to_email: "sahananarasipuravasudevarao@gmail.com",
        },
        "Pg8VFGRCQ4kU8-aH0"     // from EmailJS dashboard
      );
      alert("Message sent successfully!");
      setFormData({ email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("There was an error sending the message.");
    }
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
