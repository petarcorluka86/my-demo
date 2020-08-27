import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './Context';
import App from './components/App'
import './index.css'
import store from './store';

const render = () => ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
  document.getElementById('root')
);

store.subscribe(render);
render();