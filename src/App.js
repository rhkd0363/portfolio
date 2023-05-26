import { useRef } from "react";
import "./App.css";
import AboutMe from "./component/AboutMe";
import MainBanner from "./component/MainBanner";
import NavBar from "./component/NavBar";
import Skill from "./component/Skill";
import Experience from "./component/Experience";
import AwardCertificate from "./component/AwardCertificate";
import Project from "./component/Project";
import github from "./assets/svg/github.svg";

function App() {
  const aboutMeRef = useRef();
  const skillRef = useRef();
  const experienceRef = useRef();
  const awardCertificateRef = useRef();
  const projectRef = useRef();

  const onTitleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const onAboutMeClick = () => {
    window.scrollTo({
      top: aboutMeRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };
  const onSkillClick = () => {
    window.scrollTo({
      top: skillRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };
  const onExperienceClick = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };
  const onAwardCertificateClick = () => {
    window.scrollTo({
      top: awardCertificateRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };
  const onProjectClick = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop - 68,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <NavBar
        onTitleClick={onTitleClick}
        onAboutMeClick={onAboutMeClick}
        onSkillClick={onSkillClick}
        onExperienceClick={onExperienceClick}
        onAwardCertificateClick={onAwardCertificateClick}
        onProjectClick={onProjectClick}
      />
      <main>
        <MainBanner onAboutMeClick={onAboutMeClick} />
        <AboutMe aboutMeRef={aboutMeRef} />
        <Skill skillRef={skillRef} />
        <Experience experienceRef={experienceRef} />
        <AwardCertificate awardCertificateRef={awardCertificateRef} />
        <Project projectRef={projectRef} />
      </main>
      <footer style={{ background: "#000", height: "3rem", padding: "1rem" }}>
        <img src={github} alt="#" style={{ height: "3rem" }} />
      </footer>
    </div>
  );
}

export default App;
