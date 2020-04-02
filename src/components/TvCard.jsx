import React from "react";
import { withRouter } from "react-router-dom";

function TvCard({ tvData, lastshowListRef, history }) {
  const overviewConvert = () => {
    let overviewLength = tvData.overview.split(" ").length;
    let overviewString = tvData.overview.split(" ");
    return overviewLength < 50
      ? overviewString.join(" ")
      : overviewString.slice(0, 50).join(" ") + "  ...";
  };

  const handleTvDetailClick = id => {
    history.push(`/detail/${id}`);
  };

  return (
    <div
      className="tv-card"
      ref={lastshowListRef}
      onClick={() => handleTvDetailClick(tvData.id)}
    >
      {tvData && (
        <>
          <div className="tv-card-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
              alt={tvData.name}
              className="tv-card-image"
            ></img>
          </div>
          <div className="tv-card-detail">
            <h1>{tvData.name}</h1>
            <h5>{overviewConvert()}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(TvCard);
