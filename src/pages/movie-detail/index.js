import React, { useState, useEffect } from 'react';

import api from './../../services/api';
import './styles.scss';

export default function Movie(props) {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/films`);
      const { results } = response.data;
      const m = results.find(movie => {
        return `${movie.episode_id}` === `${props.match.params.id}`;
      });
      setMovies(m);
    }
    fetchData();
  }, [props.match.params.id]);

  const fetchDetails = details => {
    details && details.map(detail => {});

    // console.log(details);
    return (
      <li>
        <p>batata</p>
      </li>
    );
  };

  return (
    <div className="container">
      <h1>
        Episode {movie.episode_id} : {movie.title}
      </h1>
      <div className="sub-title">
        <p>Release Date: {movie.release_date}</p>
        <p>Director : {movie.director}</p>
        <p>Producer : {movie.producer}</p>
      </div>
      <div className="movie-crawl">
        <span>{movie.opening_crawl}</span>
      </div>

      <div className="characters-block">
        <h1>Characters</h1>
        <ul className="characters-list">{fetchDetails(movie.characters)}</ul>
      </div>
    </div>
  );
}
