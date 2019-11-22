import React, { Component } from 'react';
import './styles.css';

export default class Header extends Component {
  state = {
    routes: [
      { path: '/', title: 'Home' },
      { path: '/characters', title: 'Characters' },
      { path: '/planets', title: 'Planets' },
      { path: '/species', title: 'Species' },
      { path: '/spaceships', title: 'Spaceships' },
      { path: '/vehicles', title: 'Vehicles' },
      { path: '/about', title: 'About' },
    ],
  };

  render() {
    const { routes } = this.state;
    return (
      <div className="title-bar">
        <h1>STAR WARS</h1>
        <nav>
          <ul>
            {routes.map(route => (
              <li key={route.title}>
                <a href={route.path}>{route.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
