import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import TerminalBootAnimation from "./TerminalBootAnimation";
import ScrollProgressBar from "./ScrollProgressBar";
import resumeImage from "../assets/resume_picture.jpg";
import VisitorCounter from "./VisitorCounter";

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
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const [showTerminal, setShowTerminal] = useState(true); // Always show terminal on load
  const [animationPhase, setAnimationPhase] = useState(0);
  const [mobileNavHeight, setMobileNavHeight] = useState(0);
  const navbarRef = useRef(null);

  const defaultMobileNavHeight = 64;

  useEffect(() => {
    const img = new Image();
    img.src = resumeImage;

    if (window.innerWidth < 768) {
      setMobileNavHeight(defaultMobileNavHeight);

      setTimeout(() => {
        const navbarEl = document.getElementById("mobile-navbar");
        if (navbarEl) {
          setMobileNavHeight(navbarEl.offsetHeight);
        }
      }, 600);
    }

    const handleResize = () => {
      if (window.innerWidth < 768) {
        const navbarEl = document.getElementById("mobile-navbar");
        if (navbarEl) {
          setMobileNavHeight(navbarEl.offsetHeight);
        } else {
          setMobileNavHeight(defaultMobileNavHeight);
        }
      } else {
        setMobileNavHeight(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBootComplete = () => {
    setShowTerminal(false);

    setTimeout(() => {
      setAnimationPhase(1);
    }, 500);
    setTimeout(() => {
      setAnimationPhase(2);
    }, 1100);
    setTimeout(() => {
      setAnimationPhase(3);
    }, 1700);
    setTimeout(() => {
      setAnimationPhase(4);
    }, 2300);
  };

  const mobileNavVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      {/* Terminal animation */}
      {showTerminal && (
        <TerminalBootAnimation onComplete={handleBootComplete} />
      )}

      {/* Animated transition */}
      {!showTerminal && (
        <div className="min-h-screen w-screen bg-black flex flex-col md:flex-row overflow-x-hidden">
          {/* Animated Navbar */}
          <div className="hidden md:block md:w-72 relative">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{
                x: animationPhase >= 1 ? 0 : -300,
                opacity: animationPhase >= 1 ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                duration: 0.6,
              }}
              className="fixed left-0 top-0 bottom-0 w-72"
            >
              <Navbar />
            </motion.div>
          </div>

          {/* Mobile navbar with optimized animations */}
          <div
            className="md:hidden w-full fixed top-0 left-0 right-0 z-30"
            ref={navbarRef}
            style={{ willChange: "transform" }}
          >
            <motion.div
              id="mobile-navbar"
              variants={mobileNavVariants}
              initial="hidden"
              animate={animationPhase >= 1 ? "visible" : "hidden"}
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
              }}
            >
              <Navbar />
            </motion.div>
          </div>

          <div
            className="flex-1 overflow-y-auto md:ml-0 md:pt-0"
            style={{
              paddingTop:
                window.innerWidth < 768 ? `${mobileNavHeight}px` : "0px",
              marginTop: "0px",
            }}
          >
            <RefreshHandler />
            <ScrollToSection />

            {/* About Me with special animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: animationPhase >= 2 ? 1 : 0,
                y: animationPhase >= 2 ? 0 : 50,
              }}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="md:pt-0"
              style={{
                marginTop: window.innerWidth < 768 ? "1rem" : "0",
                willChange: "transform, opacity",
              }}
            >
              <AboutMe />
            </motion.div>

            {/* Rest of content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationPhase >= 3 ? 1 : 0,
              }}
              transition={{
                type: "tween",
                duration: 0.7,
                ease: "easeIn",
              }}
            >
              <Education />
              <Experience />
              <Projects />
              <Hobbies />
            </motion.div>
            <VisitorCounter />
          </div>

          <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none z-10"></div>
        </div>
      )}
    </>
  );
}

export default AppContent;
