import React, { useState, useEffect } from 'react';

import api from './../../services/api';
import './styles.scss';

export default function Movie(props) {
  const [movie, setMovies] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/films`);
      const { results } = response.data;
      const movie = results.find(movie => {
        return `${movie.episode_id}` === `${props.match.params.id}`;
      });

      setMovies(movie);
    }

    fetchData();
  }, [props.match.params.id]);

  useEffect(() => {
    const { characters } = movie;

    function fetchDetails() {
      characters &&
        characters.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setCharacters(state => [...state, data]);
          return data;
        });
    }
    fetchDetails();
  }, [movie]);

  // useEffect(() => {
  //   console.log(characters);
  // }, [characters]);

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
        <ul className="characters-list">
          {characters.map(character => (
            <div className="characters-detail" key={character.url}>
              <h2>{character.name}</h2>
              <ul>
                <li>height : {character.height}</li>
                <li>hair color : {character.hair_color}</li>
                <li>gender : {character.gender}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
