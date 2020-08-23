import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
   
    <Fragment>
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
    </Fragment>
  );
}

export default Login;
