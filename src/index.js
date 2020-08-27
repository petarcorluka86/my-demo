import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import {store} from './routes';

const render = () => ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

store.subscribe(render);
render();