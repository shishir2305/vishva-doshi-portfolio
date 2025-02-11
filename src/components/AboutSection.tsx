import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import "../styles/aboutStyles.css";
import profileImage from "../assets/dummy-image.jpg"; // change to your image

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate image from left
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      }
    );
    // Animate text from right
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
        },
      }
    );
  }, []);

  // Define your skill icons with final positions.
  const skillIcons = [
    { icon: <FaReact />, pos: { top: "5%", left: "5%" } },
    { icon: <FaNodeJs />, pos: { top: "10%", right: "10%" } },
    { icon: <FaHtml5 />, pos: { bottom: "15%", left: "10%" } },
    { icon: <FaCss3Alt />, pos: { bottom: "10%", right: "12%" } },
    { icon: <FaJsSquare />, pos: { top: "70%", left: "80%" } },
    { icon: <FaGithub />, pos: { top: "80%", right: "15%" } },
    { icon: <FaFigma />, pos: { bottom: "20%", right: "30%" } },
    { icon: <FaPython />, pos: { bottom: "25%", left: "25%" } },
  ];

  // Create random offsets for the initial animation (computed once)
  const iconOffsets = useMemo(
    () =>
      skillIcons.map(() => ({
        x: Math.floor(Math.random() * 300 - 150), // random from -150 to 150
        y: Math.floor(Math.random() * 300 - 150),
      })),
    []
  );

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-main">
        <div className="about-image" ref={imageRef}>
          <img src={profileImage} alt="Vishva" />
        </div>
        <div className="about-content" ref={textRef}>
          <h1>hi, I'm Vishva</h1>
          <p className="location">Based in Canada</p>
        </div>
      </div>
      <div className="icons-container" ref={iconsRef}>
        {skillIcons.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-icon"
            style={{ ...skill.pos, position: "absolute" }}
            initial={{
              x: iconOffsets[index].x,
              y: iconOffsets[index].y,
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "backOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Twinkling overlay */}
            <motion.div
              className="twinkle"
              style={{
                position: "absolute",
                top: "-10%",
                left: "-10%",
                right: "-10%",
                bottom: "-10%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 80%)",
                zIndex: -1,
              }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {skill.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
