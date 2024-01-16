import React, { useEffect, useState } from "react";
import "./Requisitionform.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
const Requisitionform = () => {
  const [staffName, setStaffName] = useState("");
  const [staffID, setStaffID] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [toner_name, setToner_name] = useState("");
  const [printer, setPrinter] = useState("");
  const [data, setData] = useState([]);
  const api = import.meta.env.VITE_DJANGO_URL;
  useEffect(() => {
    getToners();
  }, []);
  const postToner = (event) => {
    event.preventDefault();
    axios
      .post(`http://127.0.0.1:8000/toner_requests/`, {
        Staff_name: "Kariuki",
        Staff_ID: "001",
        Department: 2,
        Location: 2,
        Toner_name: 2,
        printer_name: 2,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };
  const getToners = () => {
    axios
      .get(`http://127.0.0.1:8000/toner_requests/`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const rendertoner = () => {};
  return (
    <div className="request_page">
      <h1>Request Form</h1>
      <form className="request_form">
        <input
          className="text_input"
          type="text"
          placeholder="staff name"
          onChange={(e) => setStaffName(e.target.value)}
        />
        <input
          className="text_input"
          type="text"
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
        <select
          className="text_input"
          type="text"
          placeholder="Toner name"
          onChange={(e) => setToner_name(e.target.value)}
        >
          {data.map((t) => {
            <option value={t.Toner_requests.Department}></option>;
          })}
        </select>
        <input
          className="text_input"
          type="text"
          placeholder="Printer name"
          onChange={(e) => setPrinter(e.target.value)}
        />
        <button className="btn" onClick={postToner}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Requisitionform;
