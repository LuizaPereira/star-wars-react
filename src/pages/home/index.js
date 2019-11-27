import React, { Component } from 'react';
import api from './../../services/api';
import './styles.scss';

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const response = await api.get(`/films`);

    const { results } = response.data;

    this.setState({ movies: results });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="container-home">
        <ul>
          {movies.map(movie => (
            <li key={movie.episode_id}>
              <a href={`/movies/${movie.episode_id}`}>
                Episode {movie.episode_id} : {movie.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
