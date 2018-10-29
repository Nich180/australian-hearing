import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './stylesheets/transitions.css';
import './stylesheets/breakpoints.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.css';
import { FaBeer } from 'react-icons/fa';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
