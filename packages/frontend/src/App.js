import React from 'react';
import { Router } from 'react-router-dom';

import logo from './assets/logo.svg';

import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Router history={history}>
          <Routes />
        </Router>
      </div>
    </div>
  );
}

export default App;
