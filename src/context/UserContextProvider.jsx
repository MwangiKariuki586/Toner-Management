import { createContext, useState } from "react";

import UserContext from "./UserContext";
import { jwtDecode } from "jwt-decode";

const UserContextProvider = ({ children }) => {
  const auth = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const authenticate = localStorage.getItem("user")
    ? jwtDecode(localStorage.getItem("user"))
    : null;
  const [user, setUser] = useState(authenticate);
  const [authtoken, setAuthtoken] = useState(auth);

  return (
    <UserContext.Provider value={{ user, setUser, authtoken, setAuthtoken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
