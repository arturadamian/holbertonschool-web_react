import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy }  from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
      </header>
      <hr/>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
      <hr/>
      <footer>
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
