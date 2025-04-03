import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import resumeImage from "../assets/resume_picture.jpg";

const Navbar = () => {
  const location = useLocation(); // Determines if we're on the homepage
  const navigate = useNavigate(); // Programmatic navigation
  const isHomePage = location.pathname === "/"; // Boolean to check for if we're on the base route (HomePage) '/'
  
  const navItems = [
    { path: "/aboutme", id: "aboutme", label: "ABOUT ME" },
    { path: "/education", id: "education", label: "EDUCATION" },
    { path: "/experience", id: "experience", label: "EXPERIENCE" },
    { path: "/projects", id: "projects", label: "PROJECTS" },
    { path: "/hobbies", id: "hobbies", label: "HOBBIES" },
    { path: "/contact", id: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (item, e) => { // Item being an element in the navItems array
    e.preventDefault();
    
    navigate(item.path); // Uses React Router to change the route without reloading the page
    
    if (isHomePage) {
      setTimeout(() => { // We need a setTimeout here to ensure that we scroll after React Router updates the URL
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-72 bg-gray-800 text-white p-4 flex flex-col items-center justify-center overflow-y-auto">
      <Link to="/">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
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
  );
};

export default Navbar;
