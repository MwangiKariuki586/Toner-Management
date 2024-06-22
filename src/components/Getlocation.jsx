import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
export const Getlocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getToners();
  }, []);

  const getToners = () => {
    fetch(`http://localhost:8000/locations/`)
      .then((response) => response.json())
      .then((result) => {
        setLocations(result.Locations);
        //console.log(locations);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mapLocations = locations.map((res) => {
    return (
      <option value={res.Location_name} key={uuidv4()}>
        {res.Location_name}
      </option>
    );
  });
  return <>{mapLocations}</>;
};
