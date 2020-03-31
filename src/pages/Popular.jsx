import React, { useState, useEffect, useRef, useCallback } from "react";
import TvCard from "../components/TvCard";

export default function Popular() {
  //state
  const [popularShow, setpopularShow] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=4e6dceee069232bb2d064403249143c6&language=en-US&page=${page}`
    )
      .then(result => result.json())
      .then(data => {
        setpopularShow(prevPopularShow => {
          return [...prevPopularShow, ...data.results];
        });
        setHasMore(page < data.total_pages);
        setLoading(false);
      });
  }, [page]);

  const observer = useRef();
  const lastPopularShowRef = useCallback(
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
  return (
    <div className="card-list">
      {popularShow.map((show, index) => {
        if (popularShow.length === index + 1) {
          return (
            <TvCard
              lastPopularShowRef={lastPopularShowRef}
              key={show.id}
              tvData={show}
            ></TvCard>
          );
        } else {
          return <TvCard key={show.id} tvData={show}></TvCard>;
        }
      })}
    </div>
  );
}
