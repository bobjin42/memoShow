import React from "react";
import { withRouter } from "react-router-dom";

function TvCard({ tvData, history }) {
  const overview =
    tvData.overview.split(" ").length < 50
      ? tvData.overview
      : tvData.overview
          .split(" ")
          .slice(0, 50)
          .join(" ") + "  ...";

  return (
    <div
      className="tv-card"
      onClick={() => history.push(`/detail/${tvData.id}`)}
    >
      {tvData && (
        <>
          <div className="tv-card-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
              alt={tvData.name}
              className="tv-card-image"
            />
          </div>
          <div className="tv-card-detail">
            <h1>{tvData.name}</h1>
            <h5>{overview}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(TvCard);
