import React from "react";
import "./Staff_login.css";
const Staff_login = () => {
  return (
    <div className="signin_form">
      <h2>Sign in to your account</h2>
      <form className="formsignin">
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            Staff id
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter your email"
          />
        </div>
        <label className="inputlabels" htmlFor="">
          Password
        </label>
        <input
          className="keyinputs"
          type="password"
          placeholder="enter your password"
        />
        <button className="btn">Sign in</button>
      </form>
    </div>
  );
};

export default Staff_login;
