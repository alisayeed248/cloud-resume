// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 flex flex-col md:flex-row">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;