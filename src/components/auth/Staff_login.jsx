import React, { useContext, useState } from "react";
import "./Staff_login.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import UserContextProvider from "../../context/UserContextProvider";
import UserContext from "../../context/UserContext";
const Staff_login = () => {
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [staffID, setStaffID] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errmmsg, setErrmsg] = useState("");
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
        console.log(response);
        const accessToken = response?.data?.access;
        setUser({ staffID, pwd, accessToken });
        setStaffID("");
        setPwd("");
        setSuccess(true);
        // if (response.request.status == 200) {
        //   console.log(response);
        //   alert("You have successfully logged in");
        // } else if (response.data.access) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
      })
      .catch((err) => {
        console.log(err);
        if (!err?.response) {
          alert("No server response");
        } else if (err.response?.status === 400) {
          setErrmsg("Missing Staff ID or Password");
        } else if (err.response?.status === 401) {
          setErrmsg("Unauthorized");
        } else {
          setErrmsg("Login Failed");
        }
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
