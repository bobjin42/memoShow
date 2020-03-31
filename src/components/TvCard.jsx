import React from "react";

export default function TvCard({ tvData }) {
  return (
    <div className="tv-card">
      <div className="tv-card-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
          alt={tvData.name}
          className="tv-card-image"
        ></img>
      </div>
      <div className="tv-card-detail">
        <h1 className="tv-card-title">{tvData.name}</h1>
        <h5>{tvData.overview}</h5>
      </div>
    </div>
  );
}
