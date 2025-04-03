// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "<div className="" />
<pages></pages>/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen bg-gray-900 flex flex-col md:flex-row overflow-x-hidden">
        <Navbar />
        <div className="flex-1 overflow-y-auto md:ml-72">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
