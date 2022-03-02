import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import DataContext from "./context/DataContext"

ReactDOM.render(
  <React.StrictMode>
    <DataContext.Provider>
      <App />
    </DataContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


