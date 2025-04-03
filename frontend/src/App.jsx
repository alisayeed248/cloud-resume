// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";

// This component handles scrolling when the route changes
function ScrollToSection() {
  const location = useLocation();
  
  useEffect(() => {
    // Map of paths to section IDs
    const pathToId = {
      "/aboutme": "aboutme",
      "/education": "education",
      "/experience": "experience", 
      "/projects": "projects",
      "/hobbies": "hobbies",
      "/contact": "contact"
    };
    
    // Get the section ID for the current path
    const sectionId = pathToId[location.pathname];
    
    if (sectionId) {
      // Find the section element
      const section = document.getElementById(sectionId);
      if (section) {
        // Scroll to the section
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      // If on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  
  return null;
}

// Main App component
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen bg-gray-900 flex flex-col md:flex-row overflow-x-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto md:ml-72 pt-16 md:pt-0">
          {/* Add the ScrollToSection component inside the BrowserRouter */}
          <ScrollToSection />
          
          {/* Always render all sections */}
          <AboutMe />
          <Education />
          <Experience />
          <Projects />
          <Hobbies />
          
          {/* Routes for the hobby blog pages */}
          <Routes>
            <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
            <Route path="/hobbies/:hobbyName/:postId" element={<PostPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;