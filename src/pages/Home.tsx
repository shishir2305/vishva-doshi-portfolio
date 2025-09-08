import { useEffect, useState } from "react";
import "../styles/homeStyles.css";
import GreetingsAnimation from "../components/GreetingsAnimation";
import HomeIntroSection from "../components/HomeIntro";
import AboutSection from "../components/AboutSection";
import ProjectComponent from "../components/ProjectComponent";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Prevent background scrolling while the intro overlay is visible
  useEffect(() => {
    if (!animationComplete) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [animationComplete]);

  return (
    <div>
      {!animationComplete && (
        <GreetingsAnimation onComplete={() => setAnimationComplete(true)} />
      )}
      <HomeIntroSection />
      <AboutSection />
      <ProjectComponent />
      <ContactForm />
    </div>
  );
};

export default Home;
