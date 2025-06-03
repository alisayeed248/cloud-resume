import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import resumeImage from "../assets/resume_picture.jpg";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/aboutme", id: "aboutme", label: "ABOUT ME" },
    { path: "/education", id: "education", label: "EDUCATION" },
    { path: "/experience", id: "experience", label: "EXPERIENCE" },
    { path: "/projects", id: "projects", label: "PROJECTS" },
    { path: "/hobbies", id: "hobbies", label: "HOBBIES" },
  ];

  const handleNavClick = (item, e) => {
    e.preventDefault();

    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden md:fixed md:left-0 md:top-0 md:bottom-0 md:w-72 md:bg-black md:text-white md:p-4 md:flex md:flex-col md:items-center md:justify-center md:overflow-y-auto">
        <Link
          to="/"
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-blue-500 shadow-xl shadow-blue-400/20 hover:shadow-blue-400/40 transition-all duration-300 hover:scale-105">
            <img
              src={resumeImage}
              alt="Sayeed Ali"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        <ul className="font-mono flex flex-col items-center space-y-6 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="hover:text-blue-400 transition-colors"
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white z-50 md:hidden">
        <div className="flex justify-between items-center p-4">
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={resumeImage}
                alt="Sayeed Ali"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-mono font-bold">Sayeed Ali</span>
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="bg-black p-4">
            <ul className="font-mono flex flex-col space-y-4 text-lg">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.path}
                    className="block py-2 hover:text-blue-400 transition-colors"
                    onClick={(e) => handleNavClick(item, e)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
