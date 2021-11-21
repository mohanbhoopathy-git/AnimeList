import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './code-challenge/AnimeList.css';
import AnimeList from './code-challenge/AnimeList';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start({ quiet: true });
}

ReactDOM.render(
  <React.StrictMode>
    <AnimeList />
  </React.StrictMode>,
  document.getElementById('root')
);
