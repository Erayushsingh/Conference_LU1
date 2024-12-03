import React from 'react';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ element }) => {
  // Check if the user is authenticated (e.g., check if a token exists in localStorage)
  const isAuthenticated = !!localStorage.getItem('token');

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/lko" />;
  }
  // If the user is authenticated, render the element (the protected component)
  return element;
};

export default ProtectedRoute;
