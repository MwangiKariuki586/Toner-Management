import React, { useState } from "react";
import "./Staff_login.css";
const Staff_login = () => {
  const [staffID, setStaffID] = useState("");
  const [pwd, setPwd] = useState("");
  const stateChange = () => {
    setPwd((e) => e.target.value);
    console.log(pwd);
  };
  const staffChange = () => {
    setStaffID((e) => e.target.value);
    console.log(staffID);
  };
  return (
    <div className="signin_form">
      <h2>Sign in to your account</h2>
      <form className="formsignin">
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Staff id</h4>
          </label>
          <input
            className="keyinputs no_spinner"
            type="number"
            placeholder="enter your staffID"
            onChange={staffChange}
          />
        </div>
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Password</h4>
          </label>
          <input
            className="keyinputs"
            type="password"
            placeholder="enter your password"
            onChange={stateChange}
          />
        </div>
        <button className="btn">Sign in</button>
      </form>
    </div>
  );
};

export default Staff_login;
