import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function Detail({ match, history }) {
  const id = match.params.id;

  //state
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=4e6dceee069232bb2d064403249143c6&language=en-US`
    )
      .then(result => result.json())
      .then(data => setDetailData({ ...data }));
  }, [id]);

  const handleGenreClick = id => {
    history.push(`/discover/${id}`);
  };

  return (
    <div className="detail-section">
      {detailData && (
        <>
          <div
            className="detail-section-bg"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detailData.backdrop_path})`
            }}
          >
            <div className="detail-section-wrapper">
              <div className="detail-section-information">
                <img
                  alt={detailData.name}
                  src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
                ></img>
                <div className="detail-section-description">
                  <h1>{detailData.name}</h1>
                  <div>
                    <h5>{detailData.last_air_date}</h5>
                    <span>
                      {detailData.genres &&
                        detailData.genres.map(genre => {
                          return (
                            <span
                              key={genre.id}
                              onClick={() => handleGenreClick(genre.id)}
                              className="detail-section-genres"
                            >
                              {genre.name}
                            </span>
                          );
                        })}
                    </span>
                    <h5>{detailData.overview}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default withRouter(Detail);
