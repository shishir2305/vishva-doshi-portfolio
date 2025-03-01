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
  const greetings = ["Hello", "olá", "नमस्ते", "Bonjour", "Hallo", "Ciao"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 300); // Changed from 200 to 400

    setTimeout(() => {
      gsap.to(".intro", {
        y: "-100%",
        duration: 1.5, // Changed from 1 to 2
        ease: "power3.inOut",
        onComplete: onComplete,
      });
    }, greetings.length * 300); // Changed from 200 to 400

    return () => clearInterval(interval);
  }, [onComplete, greetings.length]);

  return (
    <div className="intro">
      <span className="dot"></span>
      {greetings[currentIndex % greetings.length]}
    </div>
  );
};

export default GreetingsAnimation;
