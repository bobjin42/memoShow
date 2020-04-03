import React, { useState, useEffect } from "react";
import TvCard from "../components/TvCard";
import { withRouter } from "react-router-dom";

function Discover({ match, history }) {
  //state
  const [showList, setshowList] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("top_rated");
  const [genreId, setGenreId] = useState(match.params.genreId);

  useEffect(() => {
    console.log(genreId);
    const url = genreId
      ? `https://api.themoviedb.org/3/discover/tv?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genreId}&include_null_first_air_dates=false`
      : `https://api.themoviedb.org/3/tv/${searchQuery}?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=${page}`;

    fetch(url)
      .then(result => result.json())
      .then(data => {
        setshowList(prevShowList => {
          return [...prevShowList, ...data.results];
        });
      });
  }, [page, searchQuery, genreId]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handFilterClick = query => {
    if (query !== searchQuery) {
      setGenreId(null);
      setshowList([]);
      setPage(1);
      setSearchQuery(query);
    }
  };

  return (
    <div>
      <div className="fiter-section">
        <h1 onClick={() => handFilterClick("top_rated")}>Top Rated</h1>
        <h1 onClick={() => handFilterClick("popular")}>Most Popular</h1>
      </div>
      <div className="card-list">
        {showList.map(show => {
          return <TvCard key={show.id} tvData={show}></TvCard>;
        })}
      </div>
    </div>
  );
}

export default withRouter(Discover);
