import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
export const Gettoner = () => {
  const [tonerlist, setTonerlist] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://192.168.9.17:8000/toner/toners/`)
      .then((response) => response.json())
      .then((result) => {
        setTonerlist(result.Toners);
        console.log(tonerlist ? tonerlist : null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const maptoners = tonerlist?.map((res) => {
    return (
      <option key={uuidv4()} value={res.id} className="text_input">
        {res.Toner_name}
      </option>
    );
  });
  return <>{maptoners}</>;
};
