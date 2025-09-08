import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from "react-icons/fi";
import "../styles/projectStyles.css";

// No images needed for the redesigned layout

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  highlights: string[];
  stats: { label: string; value: string }[];
  theme: { background: string; text: string; accent: string };
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "London Bike Rides – Analytics Dashboard",
    summary:
      "Interactive Tableau dashboard analyzing ~2.4M London bike rentals, revealing seasonality, weather impact, and demand patterns to inform staffing and inventory planning.",
    tags: [
      "Tableau",
      "Data Visualization",
      "Time Series",
      "Weather Analytics",
      "Calculated Fields",
    ],
    highlights: [
      "15-day moving average with parameterized window to smooth demand trends.",
      "Weather effects: humidity, wind, and ‘feels-like’ temperature vs. rentals.",
      "Holiday vs. regular-day segmentation and season-wise distribution.",
    ],
    stats: [
      { label: "Rides analyzed", value: "~2.4M rides analyzed" },
      {
        label: "Views",
        value: "6+ Views (heatmap, histograms, line, donut, KPI, controls)",
      },
      {
        label: "Filter response",
        value: "<1.5s median filter response after performance tuning",
      },
    ],
    theme: { background: "#0f172a", text: "#e2e8f0", accent: "#60a5fa" }, // dark slate + soft blue
    link: "https://public.tableau.com/app/profile/vishva.doshi/viz/LondonBikeRides-FinalProject/Dashboard1",
  },
  {
    id: 2,
    title: "CO₂NO – AI-Powered Carbon Footprint Tracker",
    summary:
      "Sustainability-focused app to monitor, analyze, and reduce personal & organizational carbon footprints with intuitive dashboards and smart, AI-driven suggestions.",
    tags: [
      "Python",
      "Machine Learning",
      "Sustainability",
      "Data Visualization",
      "APIs",
    ],
    highlights: [
      "Algorithm to calculate footprint from transport, energy, and lifestyle choices.",
      "Dashboards visualizing daily/weekly/monthly emissions.",
      "AI-based recommendations (greener alternatives, carpooling, energy reduction).",
      "Gamified progress with badges and streaks to drive adoption.",
    ],
    stats: [
      {
        label: "Lifestyle categories",
        value:
          "Tracks 5+ lifestyle categories (travel, food, energy, shopping, waste).",
      },
      {
        label: "Assist",
        value: "Automated daily logging & personalized reduction tips.",
      },
      {
        label: "Usability",
        value:
          "Prototype tested in hackathon setting with 90%+ positive usability feedback.",
      },
    ],
    theme: { background: "#0b1f1a", text: "#e6f4ef", accent: "#86efac" }, // deep teal dark + soft mint accent
    link: "#",
  },
];

const ProjectSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeTheme, setActiveTheme] = useState(projects[0].theme);
  const currentBgRef = useRef<string>(projects[0].theme.background);

  useEffect(() => {
    const changeTheme = (theme: Project["theme"]) => {
      if (!containerRef.current) return;
      if (currentBgRef.current === theme.background) return; // avoid redundant transitions
      currentBgRef.current = theme.background;
      gsap.to(containerRef.current, {
        backgroundColor: theme.background,
        color: theme.text,
        duration: 0.35,
        ease: "power2.inOut",
      });
      setActiveTheme(theme);
    };

    projects.forEach((project, index) => {
      // Single theme change when section becomes active (forward/back)
      ScrollTrigger.create({
        trigger: projectRefs.current[index],
        start: "top center",
        end: "bottom center",
        onEnter: () => changeTheme(project.theme),
        onEnterBack: () => changeTheme(project.theme),
      });

      // Smooth section reveal animation
      gsap.fromTo(
        projectRefs.current[index],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectRefs.current[index],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger inner elements for a polished feel
      const q = projectRefs.current[index]?.querySelectorAll(
        ".eyebrow, h2, .project-summary, .tags, .detail-block, .cta-button"
      );
      if (q && q.length) {
        gsap.fromTo(
          q,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power1.out",
            scrollTrigger: {
              trigger: projectRefs.current[index],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="project-container"
      id="projects"
      style={{
        backgroundColor: activeTheme.background,
        color: activeTheme.text,
      }}
    >
      <h1 className="project-heading">Projects</h1>
      {projects.map((project, index) => {
        const highlightNumbers = (text: string) => {
          // Wrap contiguous numeric sequences for subtle highlighting
          return text.split(/(\d[\d,\.]*)/g).map((part, i) =>
            /^\d[\d,\.]*$/.test(part) ? (
              <span key={i} className="stat-number">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          );
        };
        return (
          <section
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="project-section"
          >
            <div className="content-wrapper">
              <div className="text-content">
                <div className="eyebrow" style={{ color: activeTheme.accent }}>
                  Case Study • 0{project.id}
                </div>
                <h2>
                  {project.title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className={
                        /[A-Z0-9–-]+/.test(word) ? "highlight" : undefined
                      }
                    >
                      {word +
                        (i < project.title.split(" ").length - 1 ? " " : "")}
                    </span>
                  ))}
                </h2>
                <p className="project-summary">{project.summary}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{
                        borderColor: activeTheme.accent,
                        color: activeTheme.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="details">
                  <div className="detail-block">
                    <h3
                      className="section-title"
                      style={{ color: activeTheme.accent }}
                    >
                      Highlights
                    </h3>
                    <ul className="highlights-list">
                      {project.highlights.map((h) => (
                        <li key={h}>
                          <span
                            className="dot"
                            style={{ backgroundColor: activeTheme.accent }}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-block">
                    <h3
                      className="section-title"
                      style={{ color: activeTheme.accent }}
                    >
                      Quick Stats
                    </h3>
                    <div className="stats-grid">
                      {project.stats.map((s) => (
                        <div
                          key={s.value}
                          className="stat-card"
                          style={{
                            borderColor: activeTheme.accent,
                            ["--accent" as any]: activeTheme.accent,
                          }}
                        >
                          <div className="stat-value">
                            {highlightNumbers(s.value)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  className="cta-button"
                  href={project.link || "#"}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    backgroundColor: activeTheme.accent,
                    color: project.theme.background,
                    ["--accent" as any]: activeTheme.accent,
                  }}
                >
                  <span>View Project</span>
                  <FiArrowUpRight aria-hidden className="cta-icon" />
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProjectSection;
