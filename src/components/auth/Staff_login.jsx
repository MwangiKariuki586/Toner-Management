import React, { useState } from "react";
import "./Staff_login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Staff_login = () => {
  const [staffID, setStaffID] = useState("");
  const [pwd, setPwd] = useState("");
  const stateChange = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
  };
  const staffChange = (e) => {
    setStaffID(e.target.value);
    console.log(staffID);
  };
  const signinUser = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/token/`, {
        username: staffID,
        password: pwd,
      })
      .then((response) => {
        if (response.request.status == 200) {
          console.log("authorize");
          alert("You have successfully logged in");
        }
      })
      .catch((err) => {
        alert("incorrect Password or Staff id");
        console.log(err);
      });
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
        <button className="btn" onClick={signinUser}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Staff_login;
