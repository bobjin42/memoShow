import React, { useState, useEffect } from "react";
import SlideShow from "../components/SlideShow";
import { Link } from "react-router-dom";

export default function Home() {
  //state
  const [onAirShow, setOnAirShow] = useState([]);

  useState(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=1"
    )
      .then(result => result.json())
      .then(data => setOnAirShow(data.results));
  });
  return (
    <div className="wrapper">
      <header className="header">
        <nav className="navbar">
          <Link to="/Home">Home</Link>
          <Link to="/Discover">Discover</Link>
          <Link to="/Popular">Popular</Link>
          <Link to="/TopRated">TopRated</Link>
        </nav>
        <input placeholder="search..." className="searchbar"></input>
      </header>
      <SlideShow onAirShow={onAirShow}></SlideShow>
    </div>
  );
}
