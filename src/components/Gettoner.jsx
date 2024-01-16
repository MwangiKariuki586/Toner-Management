import axios from "axios";
import React, { useEffect, useState } from "react";

export const Gettoner = () => {
  const [data, setData] = useState("");
  const [test, setTest] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://127.0.0.1:8000/toner_requests/`)
      .then((response) => response.json())
      .then((result) => {
        setTest(result.Toner_requests);
        console.log(test);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const maptoners = test.map((res) => {
    return <option key={res.Staff_ID}>{res.Toner_name}</option>;
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
