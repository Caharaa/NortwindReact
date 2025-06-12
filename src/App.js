import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Inventory from "./page/Inventory";
import Oreder from "./page/Oreder";
import Report from "./page/Report";
import Login from "./page/login";
import RouteProtect from "./routeprotect/RouteProtect";
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
        <NavLink to="/Login/Dashboard">Dashboard</NavLink>
        <NavLink to="/Login/Inventory">Inventory</NavLink>
        <NavLink to="/Login/Order">Order</NavLink>
        <NavLink to="/Login/Report">Report</NavLink>
        </nav>
        </header>
        <Routes>
          <Route path="/Login/Dashboard" element={<RouteProtect><FactProvider>
            <Dashboard></Dashboard>
            </FactProvider></RouteProtect>}>
            </Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Login/Inventory" element={<RouteProtect><InventoryProvider><Inventory></Inventory></InventoryProvider></RouteProtect>}></Route>
          <Route path="/Login/Order" element={<RouteProtect><OrderProvider><Oreder></Oreder></OrderProvider></RouteProtect>}></Route>
          <Route path="/Login/Report" element={<RouteProtect><OrderProvider><Oreder></Oreder></OrderProvider></RouteProtect>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
