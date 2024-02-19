import { createContext, useState } from "react";

import UserContext from "./UserContext";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect } from "react";

const UserContextProvider = ({ children }) => {
  const auth = localStorage.getItem("access")
    ? JSON.parse(localStorage.getItem("access"))
    : null;
  const authenticate = localStorage.getItem("access")
    ? jwtDecode(localStorage.getItem("access"))
    : null;
  const accessrefresh = localStorage.getItem("refresh")
    ? localStorage.getItem("refresh").replace(/"/g, "")
    : null;
  const [user, setUser] = useState(authenticate);
  const [authtoken, setAuthtoken] = useState(auth);

  const logoutUser = () => {
    setAuthtoken(null);
    setUser(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };
  const refreshToken = () => {
    axios
      .post(`http://localhost:8000/api/refresh/`, { refresh: accessrefresh })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("access", JSON.stringify(res.data.access));
        } else {
          logoutUser();
        }
      })
      .catch((error) => {
        console.error("Error refreshing token:", error);
        logoutUser();
      });
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      refreshToken();
    }, 120000);

    return () => clearInterval(intervalId);
  }, [accessrefresh]);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        authtoken,
        setAuthtoken,
        logoutUser,
        refreshToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
