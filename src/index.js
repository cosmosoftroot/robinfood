import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import DataContext from "./context/DataContext"
import AuthContext from "./context/AuthContext"

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider>
      <DataContext.Provider>
        <App />
      </DataContext.Provider>
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


