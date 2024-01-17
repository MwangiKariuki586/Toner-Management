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
    console.log(toner_name);
  };
  const locationValue = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  const printerValue = (e) => {
    setPrinter(e.target.value);
    console.log(printer);
  };
  const departmentValue = (e) => {
    setDepartment(e.target.value);
    console.log(e.target.value);
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
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="request_page">
      <h1>Request Form</h1>

      <form className="request_form">
        <input
          className="text_input"
          type="text"
          required
          placeholder="staff name"
          onChange={(e) => setStaffName(e.target.value)}
        />
        <input
          className="text_input no_spinner"
          type="number"
          placeholder="staff id"
          onChange={(e) => setStaffID(e.target.value)}
        />
        <input
          className="text_input"
          type="text"
          placeholder="Department"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          className="text_input"
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="text_input"
          type="text"
          placeholder="Toner"
          onChange={(e) => setToner_name(e.target.value)}
        />
        <input
          className="text_input"
          type="text"
          placeholder="Printer"
          onChange={(e) => setPrinter(e.target.value)}
        />
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

        <button className="btn" onClick={postToner}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Requisitionform;
