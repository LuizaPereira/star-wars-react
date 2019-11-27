import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from './../../services/api';
import './styles.scss';

export default function Home() {
  const [movies, setResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await api.get(`/films`);
    const { results } = response.data;
    setResults(results);
  };

  return (
    <div className="container-home">
      <ul>
        {movies.map(movie => (
          <li key={movie.episode_id}>
            <Link to={`/movies/${movie.episode_id}`}>
              Episode {movie.episode_id} : {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
