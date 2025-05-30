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
      // Get the token from localStorage
      const token = localStorage.getItem('admin_token');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Basic token validation (decode and check expiry)
      try {
        // Decode the base64 token
        const decoded = atob(token);
        const parts = decoded.split(':');
        
        if (parts.length < 4) {
          throw new Error('Invalid token format');
        }
        
        // Check expiry
        const expiry = parseInt(parts[3]);
        const now = Math.floor(Date.now() / 1000);
        
        if (now > expiry) {
          // Token expired
          localStorage.removeItem('admin_token');
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }
        
        // Token is valid
        setIsAuthenticated(true);
      } catch (error) {
        // Token is corrupted
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
      }
    } catch (error) {
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