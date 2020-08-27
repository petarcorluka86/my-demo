import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {store} from './routes';
import './index.css';

const render = () => ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

//Nije mi jasno zašto ja moram ovo imati, a ti nemaš?
store.subscribe(render);
render();