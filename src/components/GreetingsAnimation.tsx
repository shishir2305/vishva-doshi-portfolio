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
    }, 200);

    setTimeout(() => {
      gsap.to(".intro", {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
        onComplete: onComplete,
      });
    }, greetings.length * 200);

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
