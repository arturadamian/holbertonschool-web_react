import React from 'react';
import logo from '../assets/logo.jpg';
import '../App/App.css';
import { getFullYear, getFooterCopy }  from '../utils/utils.js';

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
        <div className="App-login">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
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
