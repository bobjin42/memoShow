import React, { useState } from "react";

export default function SlideShow({ onAirShows }) {
  //state
  const [slideShowIndex, setSlideShowIndex] = useState(0);

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
    <div className="slide-show-wrapper">
      <button className="prev" onClick={handleSlidePrev}>
        &#10094;
      </button>
      <button className="next" onClick={handleSlideNext}>
        &#10095;
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w1280${selectedImg.backdrop_path}`}
        alt={selectedImg.name}
        className="slide-show-img"
      ></img>
      <div className="slide-show-title">{selectedImg.name}</div>
    </div>
  );
}
