import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/homeStyles.css";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      gsap.to(".menu", { x: 0, duration: 0.5, ease: "power2.out" });
      gsap.fromTo(
        ".menu a",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(".menu", { x: "100%", duration: 0.5, ease: "power2.in" });
    }
  };

  return (
    <div className="container" id="home">
      <div className="intro-section">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
        <div className="hero-content">
          <div className="intro-text">
            <h1 className="hero-title">
              I'm <span className="highlight-name">Vishva Doshi</span>,
            </h1>
            <h2 className="hero-subtitle">
              Technologist & Data-Driven Problem Solver
            </h2>
          </div>

          <div className="description">
            <p className="description-text">
              My work lives at the intersection of{" "}
              <span className="accent-text">analytics</span>,{" "}
              <span className="accent-text">product innovation</span>,{" "}
              <span className="accent-text">project leadership</span>, and{" "}
              <span className="accent-text">creative design</span>. Currently
              building immersive experiences at{" "}
              <span className="company-highlight">Dreamscape Learn</span>.
            </p>
          </div>

          <div className="expertise-tags">
            <div className="tag-row">
              <span className="expertise-tag primary">
                2+ years of Experience
              </span>
              <span className="expertise-tag">Data Analytics</span>
              <span className="expertise-tag">UI/UX Design</span>
            </div>
            <div className="tag-row">
              <span className="expertise-tag">Business Intelligence</span>
              <span className="expertise-tag">Product Management</span>
              <span className="expertise-tag">QA</span>
            </div>
          </div>

          <div className="location-info">
            <div className="location-indicator"></div>
            <span className="location-text">Based in Arizona, USA</span>
          </div>

          <div className="cta-section">
            <a href="#projects" className="cta-button primary">
              <span className="cta-text">View Selected Works</span>
              <span className="cta-arrow">↓</span>
            </a>
            <a href="#contact" className="cta-button secondary">
              <span className="cta-text">Get in Touch</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
        <div className="custom-cursor"></div>
      </div>
    </div>
  );
};

export default IntroSection;
