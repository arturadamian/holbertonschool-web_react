import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
  return (
    <Fragment>
      <p>Login to access the full dashboard</p>
      <div className="App-login">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
    </Fragment>
  )
}

export default Login;
