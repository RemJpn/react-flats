import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/app.jsx';
import flats from '../data/flats.js';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App flats={flats} />, root);
}
