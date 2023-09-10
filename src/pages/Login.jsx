import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signInWithGoogle } = useAuth(); // Corrected function name
  console.log(currentUser);

  const handleLogin = async () => {
    try {
      await signInWithGoogle(); // Corrected function name
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/Chat");
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Our Massenger💕</h1>
          <p className="py-6">
            This App make for Safe conversation Stay With Us
          </p>
          <button onClick={handleLogin} className="btn btn-secondary">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
