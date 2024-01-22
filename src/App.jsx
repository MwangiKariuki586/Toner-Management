import { useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import UserContext from "./context/UserContext";
import "./App.css";
import Homepage from "./components/Homepage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Requisitionform from "./components/Requisitionform";
import Admin_login from "./components/auth/Admin_login";
import Staff_login from "./components/auth/Staff_login";
import Navbar from "./components/Navbar";
import Signup from "./components/auth/Signup";
import Nyumbani from "./components/Nyumbani";

function App() {
  const Mainlayout = () => {
    return (
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/nyumbani",
          element: <Nyumbani />,
        },
        {
          path: "/toner_request",
          element: <Requisitionform />,
        },
        {
          path: "/admin_login",
          element: <Admin_login />,
        },
        {
          path: "/staff_login",
          element: <Staff_login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
