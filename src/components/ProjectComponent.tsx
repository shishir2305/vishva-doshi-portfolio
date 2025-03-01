import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/projectStyles.css";

import image1 from "../assets/dummy-image.jpg";
import image2 from "../assets/dummy-image.jpg";
import image3 from "../assets/dummy-image.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "CRONOLOGICS OS",
    description:
      "Android-based OS integrating Amazon Alexa with wearable technology...",
    image: image1,
    theme: { background: "#242424", text: "#ffffff", accent: "#FF6B6B" },
  },
  {
    id: 2,
    title: "PROJECT BETA",
    description:
      "Revolutionizing UI/UX with neural network-driven interactions...",
    image: image2,
    theme: { background: "#E3ECE2", text: "#2C3A2E", accent: "#76A882" },
  },
  {
    id: 3,
    title: "OMEGA DESIGN SYSTEM",
    description: "Enterprise-scale design system for Fortune 500 companies...",
    image: image3,
    theme: { background: "#1E2B33", text: "#F5F3EE", accent: "#F4A261" },
  },
];

const ProjectSection = () => {
  const containerRef = useRef(null);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeTheme, setActiveTheme] = useState(projects[0].theme);

  useEffect(() => {
    projects.forEach((project, index) => {
      ScrollTrigger.create({
        trigger: projectRefs.current[index],
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        onEnter: () => changeTheme(project.theme),
        onEnterBack: () => changeTheme(project.theme),
        onLeaveBack: () => {
          if (index > 0) changeTheme(projects[index - 1].theme);
        },
      });

      gsap.fromTo(
        projectRefs.current[index],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectRefs.current[index],
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const changeTheme = (theme: any) => {
      gsap.to(containerRef.current, {
        backgroundColor: theme.background,
        color: theme.text,
        duration: 0.2, // Smooth fade duration
        ease: "power2.inOut",
      });

      setActiveTheme(theme);
    };
  }, []);

  return (
    <div ref={containerRef} className="project-container" id="projects">
      <h1 className="project-heading">My Projects</h1>
      {projects.map((project, index) => (
        <section
          key={project.id}
          ref={(el) => (projectRefs.current[index] = el)}
          className="project-section"
          style={{ minHeight: "100vh" }}
        >
          <div className="content-wrapper">
            {project.id % 2 === 0 ? (
              <>
                <div className="text-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <button
                    style={{
                      backgroundColor: activeTheme.accent,
                      color: activeTheme.background,
                    }}
                  >
                    View Case Study
                  </button>
                </div>
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                  <div
                    className="project-number"
                    style={{ backgroundColor: activeTheme.accent }}
                  >
                    {project.id}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="image-container">
                  <img src={project.image} alt={project.title} />
                  <div
                    className="project-number"
                    style={{ backgroundColor: activeTheme.accent }}
                  >
                    {project.id}
                  </div>
                </div>
                <div className="text-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <button
                    style={{
                      backgroundColor: activeTheme.accent,
                      color: activeTheme.background,
                    }}
                  >
                    View Case Study
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProjectSection;
