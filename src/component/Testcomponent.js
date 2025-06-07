import React, { useState, useContext } from "react";
import { OrderContext } from "../context/OrderProvider";

function TestComponent() {
  const { order } = useContext(OrderContext);

  if (!order || !Array.isArray(order)) {
    return <div className="text-center mt-5">Loading orders...</div>;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.ceil(order.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = order.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Orders</h2>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Customer ID</th>
              <th>Ship Name</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((orderItem) => (
              <tr key={orderItem.orderID}>
                <td>{orderItem.orderID}</td>
                <td>{new Date(orderItem.orderDate).toLocaleDateString()}</td>
                <td>{orderItem.customerID}</td>
                <td>{orderItem.shipName}</td>
                <td>{orderItem.shipCity}</td>
                <td>{orderItem.shipCountry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-3 flex-wrap gap-2">
          <button
            className="btn btn-outline-primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`btn ${
                currentPage === i + 1 ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
}

export default TestComponent;

