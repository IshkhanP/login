import React from 'react';
import { register, login } from './change';
import "./Login.css"

function Login() {
  return (
    <div className="Login">
      <div className="login-form">
        <div className="button_box">
          <div id="btn"></div>
          <button className="toggle-btn" onClick={login}>Log In</button>
          <button className="toggle-btn" onClick={register}>Register</button>
        </div>
        <form id="login" className="input-group">
          <input type="text" className="input-field" placeholder="Username" required />
          <input type="password" className="input-field" placeholder="Password" required />
          <input type="checkbox" className="checkbox" />
          <span> Remember Password </span>
          <button type="submit" className="submit-btn">Log in</button>
        </form>
        <form id="register" className="input-group">
          <input type="text" className="input-field" placeholder="Username" required />
          <input type="email" className="input-field" placeholder="Email" required />
          <input type="password" className="input-field" placeholder="Password" required />
          <input type="checkbox" className="checkbox" />
          <span> I agree to the terms & conditions </span>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
