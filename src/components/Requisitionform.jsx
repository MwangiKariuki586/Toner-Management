import React, { useContext, useEffect, useState } from "react";
import "./Requisitionform.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Gettoner } from "./Gettoner";
import { Getdepartments } from "./Getdepartments";
import { Getlocations } from "./Getlocation";
import { Getprinter } from "./Getprinter";
import UserContext from "../context/UserContext";
const Requisitionform = () => {
  const [staffName, setStaffName] = useState("");
  const [staffID, setStaffID] = useState("");
  const [toner_name, setToner_name] = useState("");
  const [location, setLocation] = useState("");
  const [printer, setPrinter] = useState("");
  const [department, setDepartment] = useState("");
  const { logoutUser } = useContext(UserContext);
  const tonerValue = (e) => {
    setToner_name(e.target.value);
  };
  const locationValue = (e) => {
    setLocation(e.target.value);
  };
  const printerValue = (e) => {
    setPrinter(e.target.value);
  };
  const departmentValue = (e) => {
    setDepartment(e.target.value);
  };
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("user");
  const postToner = (event) => {
    event.preventDefault();
    console.log(accessToken);
    axios
      .post(
        `http://localhost:8000/toner/toner_requests/`,
        {
          toner: toner_name,
          printer_name: printer,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer" + String(accessToken),
          },
        }
      )
      .then((response) => {
        if (response.request.status == 201) {
          alert("Toner request sent successfully");
          // logoutUser();
          // navigate("/");
        }
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          alert("Make sure you entered all the fields");
        } else {
          alert("Error encountered on submition");
        }
      });
  };

  return (
    <div className="request_page">
      <h1>Request Form</h1>
      <form className="request_form">
        {/* <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Staff name</h4>
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter your staf name"
            onChange={(e) => setStaffName(e.target.value)}
          />
        </div>
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Staff id</h4>
          </label>
          <input
            className="keyinputs no_spinner"
            type="number"
            placeholder="enter your staffID"
            onChange={(e) => setStaffID(e.target.value)}
          />
        </div>
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Department</h4>
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter your Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>

        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Location</h4>
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter your Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div> */}
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Toner name</h4>
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter Toner name"
            onChange={(e) => setToner_name(e.target.value)}
          />
        </div>
        <div className="captions">
          <label className="inputlabels" htmlFor="">
            <h4>Printer name</h4>
          </label>
          <input
            className="keyinputs"
            type="text"
            placeholder="enter Printer name"
            onChange={(e) => setPrinter(e.target.value)}
          />
        </div>
        <button className="btn" onClick={postToner}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Requisitionform;
