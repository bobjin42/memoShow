import React, { useState, useEffect } from "react";
import SlideShow from "../components/SlideShow";

export default function Home() {
  //state
  const [onAirShows, setOnAirShows] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=1"
    )
      .then(result => result.json())
      .then(data => setOnAirShows(data.results));
  }, []);

  return (
    <div className="wrapper">
      <header className="header">
        <input placeholder="search..." className="searchbar"></input>
      </header>
      <SlideShow onAirShows={onAirShows} />
    </div>
  );
}
