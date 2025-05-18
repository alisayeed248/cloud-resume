import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContent from "./components/AppContent"; 
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";
import TestEditor from "./admin/components/TestEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
        <Route path="/hobbies/:hobbyName/:postId" element={<PostPage />} />
        <Route path="/test-editor" element={<TestEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;