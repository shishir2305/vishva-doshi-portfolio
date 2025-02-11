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
        <div className="content">
          <p>
            I'm <span className="bold">Vishva</span>, a multi-disciplinary
            designer with <span className="bold">7 years</span> of experience,
            driven by curiosity.
          </p>
          <p>
            Currently building products at{" "}
            <span className="hover-text google">Google</span>, previously at{" "}
            <span className="hover-text mckinsey">McKinsey &amp; Company</span>.
          </p>
        </div>
        <div className="tags">
          <span className="tag">6+ years of exp</span>
          <span className="tag">Product Design</span>
          <span className="tag">UX Strategy</span>
          <span className="tag">Motion</span>
        </div>
        <div className="location">Based in London, United Kingdom</div>
        <a href="#projects" className="works">
          See Selected Works ↓
        </a>
        <div className="custom-cursor"></div>
      </div>
    </div>
  );
};

export default IntroSection;
