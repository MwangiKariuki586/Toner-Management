import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';
export const Gettoner = () => {
  const [data, setData] = useState("");
  const [test, setTest] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://localhost:8000/toners/`)
      .then((response) => response.json())
      .then((result) => {
        setTest(result.Toners);
        console.log(test);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const maptoners = test.map((res) => {
    return <option key={v4}>{res.Toner}</option>;
  });
  return (
    <select
      className="text_input"
      type="text"
      placeholder="Toner name"
      onChange={(e) => setToner_name(e.target.value)}
    >
      {maptoners}
    </select>
  );
};
