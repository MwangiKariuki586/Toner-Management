import React, { useContext } from "react";
import Requisitionform from "./Requisitionform";
import UserContext from "../context/UserContext";
const { setUser } = useContext(UserContext);
const { user } = useContext(UserContext);
const Nyumbani = () => {
  return <div>{user ? <Requisitionform /> : <Staff_login />}</div>;
};

export default Nyumbani;
