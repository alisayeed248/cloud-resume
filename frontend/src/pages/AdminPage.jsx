import React, { useState, useEffect } from "react";
import { Navigate } from "react-router dom";

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "my-secure-password") {
      localStorage.setItem('admin_token', 'temp_token');
    }
  }
}
