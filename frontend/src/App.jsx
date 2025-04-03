import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";

function RefreshHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const hasSession = sessionStorage.getItem('appSession');
    
    if (!hasSession) {
      sessionStorage.setItem('appSession', 'true');
      
      if (location.pathname !== '/') {
        sessionStorage.setItem('lastPath', location.pathname);
        navigate('/', { replace: true });
      }
    }
    
    return () => {
      sessionStorage.removeItem('appSession');
    };
  }, []);
  
  return null;
}

function ScrollToSection() {
  const location = useLocation();
  
  useEffect(() => {
    const pathToId = {
      "/aboutme": "aboutme",
      "/education": "education",
      "/experience": "experience", 
      "/projects": "projects",
      "/hobbies": "hobbies",
      "/contact": "contact"
    };
    
    const sectionId = pathToId[location.pathname];
    
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
  
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen w-screen bg-gray-900 flex flex-col md:flex-row overflow-x-hidden">
      <Navbar />
      <div className="flex-1 overflow-y-auto md:ml-72 pt-16 md:pt-0">
        <RefreshHandler />
        <ScrollToSection />
        
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Hobbies />
        
        <Routes>
          <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
          <Route path="/hobbies/:hobbyName/:postId" element={<PostPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;