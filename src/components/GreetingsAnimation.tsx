// src/components/IntroAnimation.tsx
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/homeStyles.css";

gsap.registerPlugin(ScrollTrigger);

interface IntroAnimationProps {
  onComplete: () => void;
}

const GreetingsAnimation = ({ onComplete }: IntroAnimationProps) => {
  const greetings = ["Hello", "Olá", "नमस्ते", "Bonjour", "Hallo", "Ciao"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Slightly faster to avoid repetition and keep it snappy
    const intervalMs = 450;
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, intervalMs);

    const exitAt = greetings.length * intervalMs - 120; // finish before next loop
    const timeoutId = window.setTimeout(() => {
      // Stop cycling before exit to avoid showing the first greeting again
      clearInterval(interval);
      gsap.to(".intro", {
        y: "-100%",
        duration: 1.6,
        ease: "power3.inOut",
        onComplete: onComplete,
      });
    }, Math.max(800, exitAt));

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [onComplete, greetings.length]);

  // Soft fade/blur-in on each greeting swap
  useEffect(() => {
    gsap.fromTo(
      ".greeting-text",
      { opacity: 0, y: 8, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [currentIndex]);

  return (
    <div className="intro">
      <span className="dot" aria-hidden="true"></span>
      <span className="greeting-text" key={currentIndex}>
        {greetings[currentIndex % greetings.length]}
      </span>
    </div>
  );
};

export default GreetingsAnimation;
