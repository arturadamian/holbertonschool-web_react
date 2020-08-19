import React from 'react';
import logo from './logo.jpg';
import './App.css';

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
        <div class="App-body">
          <p>Login to access the full dashboard</p>
        </div>
      <hr/>
      <footer>
        <div class="App-footer">
          <p>Copyright 2020 - holberton School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
