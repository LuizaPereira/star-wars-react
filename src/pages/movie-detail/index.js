import React, { useState, useEffect } from 'react';

import api from './../../services/api';
import './styles.scss';

export default function Movie(props) {
  const [movie, setMovies] = useState({});
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/films`);
      const { results } = response.data;
      const movie = results.find(movie => {
        return `${movie.episode_id}` === `${props.match.params.id}`;
      });

      setMovies(movie);
    }
    fetchMovie();
  }, [props.match.params.id]);

  useEffect(() => {
    const { characters } = movie;
    const { planets } = movie;
    const { species } = movie;
    const { starships } = movie;
    const { vehicles } = movie;

    function fetchCharacters() {
      characters &&
        characters.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setCharacters(state => [...state, data]);
          return data;
        });
    }

    function fetchPlanets() {
      planets &&
        planets.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setPlanets(state => [...state, data]);
          return data;
        });
    }

    function fetchSpecies() {
      species &&
        species.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setSpecies(state => [...state, data]);
          return data;
        });
    }

    function fetchStarships() {
      starships &&
        starships.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setStarships(state => [...state, data]);
          return data;
        });
    }

    function fetchVehicles() {
      vehicles &&
        vehicles.forEach(async detail => {
          const link = detail.substr(21, 25);
          const response = await api.get(`${link}`);
          const { data } = response;
          setVehicles(state => [...state, data]);
          return data;
        });
    }

    fetchCharacters();
    fetchPlanets();
    fetchSpecies();
    fetchStarships();
    fetchVehicles();
  }, [movie]);

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
                <li>Height : {character.height}</li>
                <li>Hair color : {character.hair_color}</li>
                <li>Gender : {character.gender}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="planets-block">
        <h1>Planets</h1>
        <ul className="planets-list">
          {planets.map(planet => (
            <div className="planets-detail" key={planet.url}>
              <h2>{planet.name}</h2>
              <ul>
                <li>Diameter : {planet.diameter}</li>
                <li>Climate : {planet.climate}</li>
                <li>Terrain : {planet.terrain}</li>
                <li>Population : {planet.population}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="species-block">
        <h1>Species</h1>
        <ul className="species-list">
          {species.map(specie => (
            <div className="species-detail" key={specie.url}>
              <h2>{specie.name}</h2>
              <ul>
                <li>Classification : {specie.classification}</li>
                <li>Designation : {specie.designation}</li>
                <li>Skin colors : {specie.skin_colors}</li>
                <li>Language : {specie.language}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="starships-block">
        <h1>Starships</h1>
        <ul className="starships-list">
          {starships.map(starship => (
            <div className="starships-detail" key={starship.url}>
              <h2>{starship.name}</h2>
              <ul>
                <li>Model : {starship.model}</li>
                <li>Cost in credits : {starship.cost_in_credits}</li>
                <li>Starship class : {starship.starship_class}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>

      <div className="vehicles-block">
        <h1>Vehicles</h1>
        <ul className="vehicles-list">
          {vehicles.map(vehicle => (
            <div className="vehicles-detail" key={vehicle.url}>
              <h2>{vehicle.name}</h2>
              <ul>
                <li>Model : {vehicle.model}</li>
                <li>Cost in credits : {vehicle.cost_in_credits}</li>
                <li>Vehicle class : {vehicle.vehicle_class}</li>
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
