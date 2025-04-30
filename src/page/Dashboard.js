import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Barchart from "../component/Barchart";
import Linechart from "../component/Linechart";
import Piechart from "../component/Piechart";
import axios from "axios";
function Dashboard() {
  // array of object used for this props charts component
  const [factOverview, setfactOverview] = useState([]);
  const [selectedKpi, setSelectedKpi] = useState("Total Sales");
  useEffect(() => {
    axios
      .get(`http://localhost:5047/api/SalesOverview/${selectedKpi}`)
      .then((response) => {
        setfactOverview(response.data);
        console.log("fetch successfully: ", response.data); // Log the response data directly
      })
      .catch((error) => {
        console.log("There was an error fetching the product list:", error);
      });
  }, [selectedKpi]);

  return (
    <>
      <section className="container mt-4">
  <div className="mb-4">
    <label className="font-medium text-gray-700 mb-2">
      Select KPI : 
    </label>
    <select
      value={selectedKpi}
      onChange={(e) => setSelectedKpi(e.target.value)}
      className="p-2 border rounded w-full max-w-sm"
    >
      <option value="Total Sales">Total Sales</option>
      <option value="Avg Order">Avg Order</option>
      <option value="revenue-by-category">
        Revenue by Product Category
      </option>
    </select>
  </div>

  <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
    {selectedKpi}
  </h2>

  <div className="flex justify-center items-center gap-6 p-4 rounded-lg">
    <Barchart data={factOverview} selectedKpi={selectedKpi} />
    <Linechart data={factOverview} selectedKpi={selectedKpi} />
    <Piechart data={factOverview} selectedKpi={selectedKpi} />
  </div>
</section>

    </>
  );
}
export default Dashboard;
