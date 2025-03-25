import React from "react";

const Navbar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-8 text-center">My Resume</h2>
      <ul className="flex flex-col items-center space-y-6 text-lg">
        <li>
          <a href="#about">ABOUT</a>
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
      </ul>
    </div>
  );
};

export default Navbar;
