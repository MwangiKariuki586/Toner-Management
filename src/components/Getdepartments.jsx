import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
export const Getdepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://localhost:8000/departments/`)
      .then((response) => response.json())
      .then((result) => {
        setDepartments(result.Departments);
        console.log(departments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mapDepartments = departments.map((res) => {
    return <option key={uuidv4()}>{res.Department_name}</option>;
  });
  return <>{mapDepartments}</>;
};
