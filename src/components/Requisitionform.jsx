import React, { useContext, useEffect, useState } from "react";
import "./Requisitionform.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Gettoner } from "./Gettoner";

import { Getprinter } from "./Getprinter";
import UserContext from "../context/UserContext";

const Requisitionform = () => {
  const [toner_name, setToner_name] = useState("");

  const [printer, setPrinter] = useState("");

  const { logoutUser } = useContext(UserContext);
  const { authtoken } = useContext(UserContext);
  const { refreshToken } = useContext(UserContext);
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
  const accessToken = localStorage.getItem("access");
  const postToner = (event) => {
    event.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: accessToken
        ? `Bearer ${accessToken.replace(/"/g, "")}`
        : console.log("token not found"),
    };

    // console.log("Headers:", headers);
    axios
      .post(
        `http://localhost:8000/toner/toner_requests/`,
        {
          toner: toner_name,
          printer_name: printer,
        },
        {
          headers,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.request.status == 201) {
          alert("Toner request sent successfully");
          logoutUser();
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
  //refreshToken()
  return (
    <div className="request_page">
      <h1>Request Form</h1>
      <form className="request_form">
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
