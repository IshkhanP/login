import React from "react";
import "./Login.css";

export function Login() {
  return (
    <div className="Login">
      <div className="login-forum">
        <div class="button_box">
          <div id="btn"> </div> <button className="toggle-btn"> Log In </button>
          <button className="toggle-btn"> Register </button>
        </div>
        <form className="input_box">
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <input type="checkbox" className="checkbox" />
          <label> Remember Password </label>
          <button type="submit" className="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
