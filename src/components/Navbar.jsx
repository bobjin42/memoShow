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
      <Link to="/popular" className="navbar-link">
        Popular
      </Link>
      <Link to="/top-rated" className="navbar-link">
        Top Rated
      </Link>
      <input placeholder="search..." className="navbar-input"></input>
    </nav>
  );
}
