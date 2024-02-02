import React, { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./Staff_login.css";
import axios from "axios";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const Staff_login = () => {
  const { setUser } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const { authtoken } = useContext(UserContext);
  const { setAuthtoken } = useContext(UserContext);
  const [staffID, setStaffID] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errmmsg, setErrmsg] = useState("");
  const stateChange = (e) => {
    setPwd(e.target.value);
  };
  const staffChange = (e) => {
    setStaffID(e.target.value);
  };
  const navigate = useNavigate();
  const signinUser = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/api/token/`, {
        staff_id: staffID,
        password: pwd,
      })
      .then((response) => {
        if (response.request.status == 200) {
          setAuthtoken(response);
          setUser(jwtDecode(response.data.access));
          localStorage.setItem("user", JSON.stringify(response.data.access));
          navigate("/toner_request");
        }
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          alert("Missing Staff ID or Password");
        } else if (err.response?.status === 401) {
          alert("Invalid StaffID");
        } else {
          alert("Login Failed");
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
        {/* <p>Hey {user?.username}</p> */}
        <button className="btn" onClick={signinUser}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Staff_login;
