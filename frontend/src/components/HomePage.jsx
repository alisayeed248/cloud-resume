import React from "react";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Hobbies from "../components/Hobbies";

function HomePage() {
  return (
    <>
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Hobbies />
    </>
  );
}

export default HomePage;