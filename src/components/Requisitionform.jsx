import React, { useEffect, useState } from "react";
import "./Requisitionform.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Gettoner } from "./Gettoner";
import { Getdepartments } from "./Getdepartments";
import { Getlocations } from "./Getlocation";
import { Getprinter } from "./Getprinter";
const Requisitionform = () => {
  const [staffName, setStaffName] = useState("");
  const [staffID, setStaffID] = useState("");
  const [toner_name, setToner_name] = useState("");
  const [location, setLocation] = useState("");
  const [printer, setPrinter] = useState("");
  const [department, setDepartment] = useState("");
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
  const postToner = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/toner_requests/`, {
        Staff_name: staffName,
        Staff_ID: staffID,
        Department: department,
        Location: location,
        Toner_name: toner_name,
        printer_name: printer,
      })
      .then((response) => {
        if (response.request.status == 201) {
          alert("Toner request sent successfully");
        }
      })
      .catch((err) => {
        alert("Error encountered on submition");
      });
  };

  return (
    <div className="request_page">
      <h1>Request Form</h1>
      <form className="request_form">
        <div className="captions">
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
        </div>
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
        {/* <select
          className="text_input"
          onChange={departmentValue}
          defaultValue="IT"
        >
          <Getdepartments />
        </select>
        <select
          className="text_input"
          defaultValue="HEAD OFFICE"
          onChange={locationValue}
        >
          <Getlocations />
        </select>
        <select className="text_input" defaultValue="Y" onChange={tonerValue}>
          <Gettoner />
        </select>
        <select
          className="text_input"
          defaultValue="ECOSYS FS 2100D"
          onChange={printerValue}
        >
          <Getprinter />
        </select> */}
      </form>
    </div>
  );
};

export default Requisitionform;
