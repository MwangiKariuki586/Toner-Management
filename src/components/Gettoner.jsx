import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
export const Gettoner = () => {
  const [tonerlist, setTonerlist] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://localhost:8000/toners/`)
      .then((response) => response.json())
      .then((result) => {
        setTonerlist(result.Toners);
        console.log(tonerlist);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const maptoners = tonerlist.map((res) => {
    return <option key={uuidv4()}>{res.Toner}</option>;
  });
  return (
    <>{maptoners}</>
    // <select
    //   className="text_input"
    //   type="text"
    //   placeholder="Toner name"
    //   onChange={(e) => setToner_name(e.target.value)}
    // >

    // </select>
  );
};
