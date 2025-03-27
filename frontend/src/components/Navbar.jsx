import React from "react";
import resumeImage from "../assets/resume_picture.jpg";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-72 bg-gray-800 text-white p-4 flex flex-col items-center justify-center overflow-y-auto">
      <a href="#about">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8">
          <img
            src={resumeImage}
            alt="Sayeed Ali"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      <ul className="font-mono flex flex-col items-center space-y-6 text-lg">
        <li>
          <a href="#about" className="hover:text-blue-400 transition-colors">ABOUT ME</a>
        </li>
        <li>
          <a href="#education" className="hover:text-blue-400 transition-colors">EDUCATION</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-400 transition-colors">EXPERIENCE</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition-colors">PROJECTS</a>
        </li>
        <li>
          <a href="#hobbies" className="hover:text-blue-400 transition-colors">HOBBIES</a>
        </li>
        <li>
          <a href="#blog" className="hover:text-blue-400 transition-colors">MY BLOG</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;