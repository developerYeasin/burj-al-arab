import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Room from "./Components/Room/Room";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login/Login";
import Registration from "./Components/Login/Registration";
import BillingPage from "./Components/BillingPage/BillingPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Book from "./Components/Book/Book";

export const UserContext = createContext();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <BrowserRouter>
      <h3>Email: {loggedInUser.email}</h3>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/room" element={<Room />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="billing" element={<PrivateRoute><Book/></PrivateRoute>}/> 
          <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/> 
        </Routes>
    </BrowserRouter>
    </UserContext.Provider> 
  );
}
