import React from "react";
import resumeImage from "../assets/resume_picture.jpg";

const Navbar = () => {
  return (
    <div className="w-72 bg-gray-800 text-white p-4 flex flex-col items-center justify-center h-screen">
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
          <a href="#about">ABOUT ME</a>
        </li>
        <li>
          <a href="#education">EDUCATION</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#hobbies">HOBBIES</a>
        </li>
        <li>
          <a href="#BLOG">MY BLOG</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
