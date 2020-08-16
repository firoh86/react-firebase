import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//firebase
// Importamos firebase ya inicializada como componente de alto orden HOC
import './firebase/fire';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
