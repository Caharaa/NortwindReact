import "./App.css";
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Jumbotron,
} from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Inventory from "./page/Inventory";
import Oreder from "./page/Oreder";
import Report from "./page/Report";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="container mt-4"><h1>NortwindDb</h1>
        <nav className="container mt-4">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/Inventory">Inventory</NavLink>
        <NavLink to="/Order">Order</NavLink>
        <NavLink to="/Report">Report</NavLink>
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
          <Route path="/Order" element={<Oreder></Oreder>}></Route>
          <Route path="/Report" element={<Report></Report>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
