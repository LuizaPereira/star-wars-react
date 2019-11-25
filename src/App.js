import React from 'react';

import Routes from './routes';
import Header from './components/header';
import './styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
