import React from 'react';
import ReactDOM from 'react-dom';
import ContextProvider from './Context';
import App from './components/App'
import './styles/index.css'

ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
  document.getElementById('root')
);
