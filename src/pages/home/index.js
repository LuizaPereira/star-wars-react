import React, { Component } from 'react';
import api from './../../services/api';

export default class Home extends Component {
  componentDidMount() {
    this.loadMovies();
  }

  loadMovies = async () => {
    const response = await api.get(`/films`);

    console.log(response.data.results);
  };

  render() {
    return <p>Batata</p>;
  }
}
