import React, { useState, useEffect, useRef, useCallback } from "react";
import TvCard from "../components/TvCard";
import { withRouter } from "react-router-dom";

function Discover({ match, history }) {
  //state
  const [showList, setshowList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("top_rated");

  const genreId = match.params.id;
  useEffect(() => {
    setLoading(true);
    const fetchUrl = () => {
      if (genreId) {
        return `https://api.themoviedb.org/3/discover/tv?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreId}&include_null_first_air_dates=false`;
      } else {
        return `https://api.themoviedb.org/3/tv/${searchQuery}?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=${page}`;
      }
    };
    fetch(fetchUrl())
      .then(result => result.json())
      .then(data => {
        setshowList(prevshowList => {
          return [...prevshowList, ...data.results];
        });
        setHasMore(page < data.total_pages);
        setLoading(false);
      });
  }, [page, searchQuery]);

  const observer = useRef();
  const lastshowListRef = useCallback(
    showref => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          setPage(page => page + 1);
        }
      });
      if (showref) observer.current.observe(showref);
    },
    [loading, hasMore]
  );

  const handFilterClick = query => {
    if (query !== searchQuery) {
      setshowList([]);
      setSearchQuery(query);
    }
    history.push("/discover");
  };

  return (
    <div>
      <div className="fiter-section">
        <h1 onClick={() => handFilterClick("top_rated")}>Top Rated</h1>
        <h1 onClick={() => handFilterClick("popular")}>Most Popular</h1>
      </div>
      <div className="card-list">
        {showList.map((show, index) => {
          if (showList.length === index + 1) {
            return (
              <TvCard
                lastshowListRef={lastshowListRef}
                key={show.id + index}
                tvData={show}
              ></TvCard>
            );
          } else {
            return <TvCard key={show.id + index} tvData={show}></TvCard>;
          }
        })}
      </div>
    </div>
  );
}

export default withRouter(Discover);
