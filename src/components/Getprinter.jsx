import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
export const Getprinter = () => {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://localhost:8000/printers/`)
      .then((response) => response.json())
      .then((result) => {
        setPrinters(result.Printer);
        console.log(printers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mapPrinters = printers.map((res) => {
    return <option key={uuidv4()}>{res.Printer_name}</option>;
  });
  return <>{mapPrinters}</>;
};
