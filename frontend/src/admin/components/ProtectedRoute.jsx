import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    try {
      // Try to get the token from localStorage
      const token = localStorage.getItem('admin_token');
      
      if (!token) {
        // No token found - user needs to login
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Parse the JSON token
      const parsedToken = JSON.parse(token);
      
      // Check if token is expired
      if (Date.now() > parsedToken.expires) {
        // Token expired - remove it and require login
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Token is valid and not expired
      setIsAuthenticated(parsedToken.authenticated === true);
    } catch (error) {
      // If there's any error (corrupted token, etc.), clear it
      console.error('Error checking authentication:', error);
      localStorage.removeItem('admin_token');
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  };

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const handleLogout = () => {
    // Clear the token and mark as not authenticated
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Checking authentication...</div>
      </div>
    );
  }

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // If authenticated, show the protected content with admin header
  return (
    <div>
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <span className="text-white font-semibold">Admin Dashboard</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default ProtectedRoute;