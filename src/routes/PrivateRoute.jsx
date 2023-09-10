import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const PrivateRoute = ({ children }) => {
  // Replace this with your authentication logic
  const {currentUser} = useAuth()

  if (!currentUser) {
    // Redirect to the login page or another route if the user is not authenticated
    return <Navigate to="/login" replace={true} />;
  }

  // Render the children if the user is authenticated
  return children;
};