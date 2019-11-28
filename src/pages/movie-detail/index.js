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

  const fetchDetails = (details, mappedAttributes) => {
    // console.log(details);
    console.log(mappedAttributes);
    details && details.map(detail => {});

    return (
      <li>
        <p>batata</p>
      </li>
    );
  };

  // Angular Example

  // ngOnInit() {
  //   const keys: string[] = Object.keys(this.object)
  //     .filter(key => this.filterKeys(key)
  //     )

  //   this.informations = keys.map(key => ({
  //     title: key,
  //     description: this.object[key]
  //   })
  //   )
  // }

  // filterKeys(key: string) {
  //   return this.mappedAttributes.indexOf(key) !== -1 && key !== this.title
  // }

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
          {fetchDetails(movie.characters, ['gender', 'height', 'hair_color'])}
        </ul>
      </div>
    </div>
  );
}
