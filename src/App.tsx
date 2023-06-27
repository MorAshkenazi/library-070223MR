import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    sessionStorage.getItem("isLoggedIn") == "true" ? true : false
  );
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
