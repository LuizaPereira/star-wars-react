import React from 'react';

import Routes from './routes';
import Header from './components/header';
import './styles.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}
