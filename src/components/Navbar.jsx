import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-link">
        Home
      </Link>
      <Link to="/discover" className="navbar-link">
        Discover
      </Link>
      <Link to="/login" className="navbar-link">
        Login
      </Link>
      <input placeholder="search..." className="navbar-input"></input>
    </nav>
  );
}
