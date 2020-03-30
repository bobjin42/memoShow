import React, { useState, useEffect } from "react";

export default function Home() {
  //state
  const [onAirShows, setOnAirShows] = useState([]);
  const [slideShowIndex, setSlideShowIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=1"
    )
      .then(result => result.json())
      .then(data => setOnAirShows(data.results));
  }, []);

  let selectedImg = onAirShows[slideShowIndex] || {};

  const handleSlideNext = () => {
    if (slideShowIndex < onAirShows.length - 1) {
      setSlideShowIndex(slideShowIndex + 1);
    }
  };

  const handleSlidePrev = () => {
    if (slideShowIndex > 0) {
      setSlideShowIndex(slideShowIndex - 1);
    }
  };
  return (
    <div className="home">
      <div className="home-carousel">
        <button className="home-btn-prev" onClick={handleSlidePrev}>
          &#10094;
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w1280${selectedImg.backdrop_path}`}
          alt={selectedImg.name}
          className="home-image"
        ></img>
        <button className="home-btn-next" onClick={handleSlideNext}>
          &#10095;
        </button>
      </div>
      <div className="home-title">{selectedImg.name}</div>
    </div>
  );
}
