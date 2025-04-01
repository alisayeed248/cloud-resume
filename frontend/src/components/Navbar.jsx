import React from "react";
import resumeImage from "../assets/resume_picture.jpg";

const Navbar = () => {
  const navItems = [
    { id: "aboutme", label: "ABOUT ME" },
    { id: "education", label: "EDUCATION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "hobbies", label: "HOBBIES" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-0 top-0 bottom-0 w-72 bg-gray-800 text-white p-4 flex flex-col items-center justify-center overflow-y-auto">
      <a 
        href="#about" 
        onClick={(e) => scrollToSection("about", e)}
      >
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
          <img
            src={resumeImage}
            alt="Sayeed Ali"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      <ul className="font-mono flex flex-col items-center space-y-6 text-lg">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="hover:text-blue-400 transition-colors"
              onClick={(e) => scrollToSection(item.id, e)}
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