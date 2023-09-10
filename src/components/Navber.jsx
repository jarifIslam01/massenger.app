import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate("")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="contenar flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">All Web</a>
        {currentUser ? (
          <button onClick={handleLogout}>Logout</button>
        ) : ''}
      </div>
    </div>
  );
};

export default Navbar;
