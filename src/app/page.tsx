import AboutMe from "./components/AboutMe";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

import nextIcon from "../../public/nextjs.svg";
import reactIcon from "../../public/react.svg"

import warayProject from "../../public/WET_Dictionary.png"

export default function Home() {
  const greeting = "Hello, I'm";
  const fullName = "Andrei Adolfo";

  const techStack = [{ imgAlt: "NextJS Image", imgSrc: nextIcon }, {imgAlt: "React icon", imgSrc: reactIcon}, {imgAlt: "React native", imgSrc: null}, {imgAlt: "Java logo", imgSrc: null}];

  const aboutMe = "An aspiring Full Stack Devoloper, currently taking up Bachelors of Science in Computer Science with Specializaiton in Machine Learning"

  const projects = [{projectName: "Waray to English/Tagalog", projectImage: warayProject, projectDescription: "A project that was aimed to explore and preseve the Waray Language."}]
  return (
    <>
      <Introduction greeting={greeting} fullName={fullName} />
      <AboutMe content={aboutMe}/>
      <TechStack technologies={techStack} />
      <Projects projects={projects}/>
    </>
  );
}
