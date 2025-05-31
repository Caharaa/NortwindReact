import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Inventory from "./page/Inventory";
import Oreder from "./page/Oreder";
import Report from "./page/Report";
import Login from "./page/login";
import { FactProvider } from "./context/FactProvider";
import { OrderProvider } from "./context/OrderProvider";
import { InventoryContext, InventoryProvider } from "./context/InventoryProvider";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <header className="container mt-4"><h1>NortwindDb</h1>
        <nav className="container mt-4">
        <NavLink to="/Dashboard">Dashboard</NavLink>
        <NavLink to="/Inventory">Inventory</NavLink>
        <NavLink to="/Order">Order</NavLink>
        <NavLink to="/Report">Report</NavLink>
        </nav>
        </header>
        <Routes>
          <Route path="/Dashboard" element={<FactProvider><Dashboard></Dashboard></FactProvider>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Inventory" element={<InventoryProvider><Inventory></Inventory></InventoryProvider>}></Route>
          <Route path="/Order" element={<OrderProvider><Oreder></Oreder></OrderProvider>}></Route>
          <Route path="/Report" element={<Report></Report>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
