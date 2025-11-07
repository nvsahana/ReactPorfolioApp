import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "../Toast/Toast";
import "./ContactMe.css";

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'info' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const createParticleBurst = (x: number, y: number) => {
    const colors = ['#4CAF50', '#00d4ff', '#9aa4b2', '#ffffff'];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 100 + Math.random() * 100;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      document.body.appendChild(particle);
      
      setTimeout(() => particle.remove(), 1000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setToast({ show: true, message: 'Invalid email format', type: 'error' });
      return;
    }

    const mobileRegex = /^[0-9]{9,15}$/;
    if (!mobileRegex.test(formData.mobile)) {
      setToast({ show: true, message: 'Invalid mobile number', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      const button = e.currentTarget.querySelector('button[type="submit"]') as HTMLElement;
      const rect = button?.getBoundingClientRect();
      
      await emailjs.send(
        "service_fx1vuaq",
        "template_kai98dx",
        {
          from_email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          to_email: "sahananarasipuravasudevarao@gmail.com",
        },
        "Pg8VFGRCQ4kU8-aH0"
      );
      
      // Create particle burst at button location
      if (rect) {
        createParticleBurst(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );
      }
      
      setToast({ show: true, message: 'Message sent successfully! 🎉', type: 'success' });
      setFormData({ email: "", mobile: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setToast({ show: true, message: 'Error sending message. Please try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
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

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Submit >'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
