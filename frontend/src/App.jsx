import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContent from "./components/AppContent"; 
import HobbyPage from "./pages/HobbyPage";
import PostPage from "./pages/PostPage";
import TestPostForm from "./admin/components/TestPostForm";
import ProtectedRoute from "./admin/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppContent />} />
        <Route path="/hobbies/:hobbyName" element={<HobbyPage />} />
        <Route path="/hobbies/:hobbyName/:slug" element={<PostPage />} />
        
        {/* Protected admin routes */}
        <Route path="/admin/posts" element={
          <ProtectedRoute>
            <TestPostForm />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 