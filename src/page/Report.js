import React, { useState, useEffect } from "react";
import axios from "axios";
// Add any libraries for exporting CSV and PDF here, like `react-csv` or `jspdf`

function Report() {
  const [salesData, setSalesData] = useState([]);
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState("2023-12-31");
  const [showNoDataAlert, setShowNoDataAlert] = useState(false); // To show alert

  // Fetch sales report
  const fetchSalesReport = () => {
    axios
      .get("http://localhost:5047/api/SalesOverview/GetReport", {
        params: { startDate, endDate },
      })
      .then((response) => {
        setSalesData(response.data);
        if (response.data.length === 0) {
          setShowNoDataAlert(true); // Show the alert when no data is returned
        } else {
          setShowNoDataAlert(false);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the sales report:", error);
      });
  };

  // Handle CSV Export (You can use libraries like `react-csv` for actual export)
  const handleExportCSV = () => {
    console.log("Exporting CSV...");
    // Implement CSV export logic here
  };

  // Handle PDF Export (You can use libraries like `jspdf` for actual export)
  const handleExportPDF = () => {
    console.log("Exporting PDF...");
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Sales Data:", salesData);
    // Implement PDF export logic here
  };

  // Pagination logic
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(salesData.length / pageSize);

  // Get the data for the current page
  const currentData = salesData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchSalesReport();
  }, [startDate, endDate]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sales Report</h2>
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      {/* Display alert if no data available */}
      {showNoDataAlert && (
        <div className="alert alert-warning" role="alert">
          No data available for the selected date range.
        </div>
      )}

      <h2 className="text-center mb-4">Products</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length === 0 ? (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          ) : (
            currentData.map((saleData) => (
              <tr key={saleData.id}>
                <td>{saleData.productName}</td>
                <td>{saleData.totalRevenue.toFixed(2)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Report;

