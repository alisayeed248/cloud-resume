import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import TerminalBootAnimation from "./components/TerminalBootAnimation";
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";

function RefreshHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasSession = sessionStorage.getItem("appSession");

    if (!hasSession) {
      sessionStorage.setItem("appSession", "true");

      if (location.pathname !== "/") {
        sessionStorage.setItem("lastPath", location.pathname);
        navigate("/", { replace: true });
      }
    }

    return () => {
      // Don't remove session on component unmount
      // Only when the app actually closes
      // sessionStorage.removeItem("appSession");
    };
  }, [location.pathname, navigate]);

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
      "/contact": "contact",
    };

    const sectionId = pathToId[location.pathname];

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        console.log(`Scrolling to section: ${sectionId}`);
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log(`Section not found: ${sectionId}`);
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const [showTerminal, setShowTerminal] = useState(true); // Always show terminal on load
  const [contentVisible, setContentVisible] = useState(false); //
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [restContentVisible, setRestContentVisisble] = useState(false);

  const handleBootComplete = () => {
    console.log("Boot animation complete");
    setShowTerminal(false);

    setTimeout(() => {
      setNavbarVisible(true);
    }, 500);
    setTimeout(() => {
      setMainContentVisible(true);
    }, 1200);
    setTimeout(() => {
      setContentVisible(true);
    }, 1500);
  };

  return (
    <>
      {/* Terminal animation */}
      {showTerminal && (
        <TerminalBootAnimation onComplete={handleBootComplete} />
      )}

      {/* Only show main content when terminal is not showing */}
      {!showTerminal && contentVisible && (
        <div className="min-h-screen w-screen bg-gray-900 flex flex-col md:flex-row overflow-x-hidden">
          {/* Animated Navbar */}
          <AnimatePresence>
            {navbarVisible && (
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  duration: 0.7,
                }}
                className="relative md:w-72"
              >
                <Navbar />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex-1 overflow-y-auto md:ml-72 pt-16 md:pt-0">
            {/* Animated Main Content*/}
            <AnimatePresence>
              {

              }
            </AnimatePresence>
            <RefreshHandler />
            <ScrollToSection />

            {/* Always render all sections on the main page */}
            <AboutMe />
            <Education />
            <Experience />
            <Projects />
            <Hobbies />

            {/* Only use Routes for truly dynamic content */}
            <Routes>
              <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
              <Route
                path="/hobbies/:hobbyName/:postId"
                element={<PostPage />}
              />
            </Routes>
          </div>
        </div>
      )}

      {/* Test button to show terminal again */}
      {!showTerminal && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-md z-50"
          onClick={() => setShowTerminal(true)}
        >
          Replay Intro
        </button>
      )}
    </>
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
