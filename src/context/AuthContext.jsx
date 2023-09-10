import React, { createContext, useState, useContext, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loding, setLoding] = useState(true);

  // SignIn With Google
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  // Sign out
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    logout,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false)
    });
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={value}>{!loding && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
