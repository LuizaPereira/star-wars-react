import React, { useState, useEffect } from 'react';

import api from './../../services/api';
import './styles.scss';

export default function Movie(props) {
  const [movie, setMovies] = useState([]);
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

  const fetchDetails = (details, mappedAttributes, type) => {
    //details && details.map(detail => {});
    // const batata =
    fetchDetail(details);

    return (
      <li className={`${type}-list`}>
        <p>batata</p>
      </li>
    );
  };

  async function fetchDetail(search) {
    const batata = [];
    search &&
      search.map(async detail => {
        const b = detail.substr(21, 25);
        const response = await api.get(`${b}`);
        const { data } = response;

        batata.push(data);
      });

    setCharacters(...characters, batata);

    // search.map(teste => {
    //   console.log(teste);

    // });
    // const b = search.substr(21, 25);
    // const response = await api.get(`${b}`);
    // const { data } = response;

    // //console.log(data);
    // return data;
  }

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
          {fetchDetails(
            movie.characters,
            ['name', 'gender', 'height', 'hair_color'],
            'characters'
          )}
        </ul>
      </div>
    </div>
  );
}
