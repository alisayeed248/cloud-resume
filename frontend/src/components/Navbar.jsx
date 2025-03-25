// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-8">My Resume</h2>
      <ul>
        <li className="mb-4">
          <a href="#about">About</a>
        </li>
        <li className="mb-4">
          <a href="#education">Education</a>
        </li>
        <li className="mb-4">
          <a href="#experience">Experience</a>
        </li>
        <li className="mb-4">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
