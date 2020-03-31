import React, { useState, useEffect } from "react";
import TvCard from "../components/TvCard";

export default function Popular() {
  //state
  const [popularShow, setpopularShow] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=1"
    )
      .then(result => result.json())
      .then(data => setpopularShow(data.results));
  }, []);

  return (
    <div className="card-list">
      {popularShow.map(show => {
        return <TvCard key={show.id} tvData={show}></TvCard>;
      })}
    </div>
  );
}
