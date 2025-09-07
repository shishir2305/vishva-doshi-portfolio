import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCalendarAlt,
  FaFolderOpen,
  FaBriefcase,
  FaTools,
} from "react-icons/fa";
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiMysql,
} from "react-icons/si";
import "../styles/aboutStyles.css";
import profileImage from "../assets/vishva image.jpg";

const AboutSection = () => {
  // Live clock (updates every second)
  const [now, setNow] = useState<Date>(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeString = useMemo(
    () =>
      now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    [now]
  );

  const tz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone,
    []
  );

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="about-dashboard" id="about" ref={sectionRef}>
      {/* Row 1 */}
      <div className="row row-top">
        {/* Hero Card */}
        <div className="card hero-card">
          <div className="status-pill">
            <span className="dot" /> Available for opportunities!!!
          </div>

          <div className="about-hero-content">
            <div className="hero-left">
              <h1>
                Hi, I'm <span className="name">Vishva Doshi</span>
              </h1>
              <p className="subtitle">AI/ML Engineer & Data Scientist</p>
              <p className="desc">
                Specializing in predictive analytics, machine learning
                applications, and innovative problem‑solving. I love building
                delightful, impactful products.
              </p>

              <div className="cta-buttons">
                <a className="btn ghost" href="#" aria-label="GitHub">
                  <FaGithub /> GitHub
                </a>
                <a className="btn ghost" href="#" aria-label="LinkedIn">
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  className="btn ghost"
                  href="mailto:hello@example.com"
                  aria-label="Email"
                >
                  <FaEnvelope /> Email
                </a>
                <a className="btn primary" href="#" aria-label="Book a call">
                  <FaCalendarAlt /> Book a call
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="avatar-wrap">
                <img src={profileImage} alt="Vishva" />
                <div className="glow" />
              </div>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="card about-card">
          <h3>About me</h3>
          <p>
            My journey into tech began with curiosity: how machines learn, how
            data can predict, and how ideas become products. I'm an entrepreneur
            at heart—rapid learning, bold thinking, and focus on building things
            that matter.
          </p>
          <div className="tools">
            <p className="tools-title">Primary tools</p>
            <div className="badges">
              <span className="badge">
                <SiPython /> Python
              </span>
              <span className="badge">
                <SiTensorflow /> TensorFlow
              </span>
              <span className="badge">
                <SiPytorch /> PyTorch
              </span>
              <span className="badge">
                <SiScikitlearn /> Scikit‑learn
              </span>
              <span className="badge">
                <SiMysql /> SQL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row row-bottom">
        <div className="card time-card">
          <div className="time-readout">
            <div className="time">{timeString}</div>
            <div className="tz">{tz}</div>
          </div>
        </div>

        <div className="card now-card">
          <div className="now-header">
            <span className="dot red" /> Now
          </div>
          <div className="now-body">
            <p className="muted">what's that?</p>
            <p className="current">
              Currently working as AI Engineer intern, exploring ML systems and
              productizing models.
            </p>
          </div>
        </div>

        <a className="card link-card projects" href="#projects">
          <div className="icon-bubble" aria-hidden>
            <FaFolderOpen />
          </div>
          <div className="title">Projects</div>
        </a>
        <a className="card link-card experiences" href="#experiences">
          <div className="icon-bubble" aria-hidden>
            <FaBriefcase />
          </div>
          <div className="title">Experiences</div>
        </a>
        <a className="card link-card skills" href="#skills">
          <div className="icon-bubble" aria-hidden>
            <FaTools />
          </div>
          <div className="title">Skills</div>
        </a>
      </div>

      {/* Row 3 - Education and Journey */}
      <div className="row row-education-journey">
        {/* Education Section */}
        <div className="card education-card">
          <div className="education-header">
            <h3>Education</h3>
          </div>

          <div className="education-content">
            <div className="university-info">
              <div className="university-logo">
                <div className="purdue-logo">
                  <span className="logo-p">P</span>
                </div>
              </div>
              <div className="university-details">
                <h4>Arizona State University</h4>
                <p className="degree">
                  Masters in Information Technology with AI
                </p>
              </div>
            </div>

            <div className="majors-row">
              <span className="major-badge">Information Technology</span>
              <span className="major-badge">
                Business Analytics & Information Management (BAIM)
              </span>
            </div>

            <div className="honors-section">
              <h5>Honors & Certificate Programs</h5>
              <div className="honors-badges">
                <span className="honor-badge dean">🏆 Dean's List</span>
                <span className="honor-badge data">
                  📊 Data Science Certificate Program
                </span>
                <span className="honor-badge entrepreneur">
                  🚀 Entrepreneurship & Innovation Certificate Program
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="card journey-card">
          <div className="journey-header">
            <span className="journey-dot"></span>
            <h3>My Journey</h3>
          </div>

          <div className="journey-content">
            <div className="earth-container">
              <div className="earth">
                <div className="location-dot india-dot" title="Gujarat, India">
                  <div className="dot-pulse"></div>
                </div>
                <div className="location-dot usa-dot" title="Arizona, USA">
                  <div className="dot-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
