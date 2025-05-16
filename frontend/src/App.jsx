import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContent from "./components/AppContent"; 
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
        <Route path="/hobbies/:hobbyName/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;