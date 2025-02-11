import { useState } from "react";
import "../styles/homeStyles.css";
import GreetingsAnimation from "../components/GreetingsAnimation";
import HomeIntroSection from "../components/HomeIntro";
import AboutSection from "../components/AboutSection";
import ProjectComponent from "../components/ProjectComponent";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <div>
      <GreetingsAnimation onComplete={() => setAnimationComplete(true)} />
      <HomeIntroSection />
      <AboutSection />
      <ProjectComponent />
      <ContactForm />
    </div>
  );
};

export default Home;
