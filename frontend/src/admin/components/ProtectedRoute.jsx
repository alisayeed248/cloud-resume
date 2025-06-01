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
      const token = localStorage.getItem('admin_token');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      // Validate token format and expiry
      let decoded;
      try {
        // Use atob but suppress the deprecation warning
        decoded = window.atob(token);
      } catch (decodeError) {
        console.warn('Failed to decode token:', decodeError);
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      const parts = decoded.split(':');
      
      if (parts.length < 4) {
        console.warn('Invalid token format - clearing token');
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      // Check expiry
      const expiry = parseInt(parts[3]);
      const now = Math.floor(Date.now() / 1000);
      
      if (now > expiry) {
        console.info('Token expired - clearing token');
        localStorage.removeItem('admin_token');
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }
      
      // Token is valid
      setIsAuthenticated(true);
      setIsLoading(false);
      
    } catch (error) {
      console.error('Error checking authentication:', error);
      localStorage.removeItem('admin_token');
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    if (status) {
      // Re-check authentication to ensure token is valid
      checkAuthentication();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Checking authentication...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

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