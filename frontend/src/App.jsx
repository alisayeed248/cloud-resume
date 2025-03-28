// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-900 flex flex-col md:flex-row overflow-x-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto md:ml-72"> 
        <AboutMe />
        <Education/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;