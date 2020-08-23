import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

const Header = () => {
  return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p>
      </div>
  );
};

export default Header;
