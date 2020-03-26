import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
    </nav>
  );
}
