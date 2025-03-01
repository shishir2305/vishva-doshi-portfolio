import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import "../styles/contactFormStyles.css";
import clientImage from "../assets/dummy-image.jpg"; // Replace with actual image
// import { FaEnvelope } from "react-icons/fa6";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setStatus("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact-header">
        <img src={clientImage} alt="Client" className="client-image" />
        <div className="social-icons">
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" aria-label="Gmail">
            <FaEnvelope />
          </a>
          <a href="#" aria-label="Dribbble">
            <FaDribbble />
          </a>
        </div>
        <h2>Let's build something great together!</h2>
        <p>You will hear back from me within 24 hours.</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="name-group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number (optional)"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
          <button type="submit" className="send-btn">
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
