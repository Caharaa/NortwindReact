import React, { useState ,useContext} from "react";
import { OrderContext } from "../context/OrderProvider";
function Testcomponent() {
  const {order} = useContext(OrderContext)
  console.log(`${order} is form context`)
  const [currentPage, setCurrentPage] = useState(1); // To track the current page
  const pageSize = 10 // Items per page (fixed)

  const totalPages = Math.ceil(order.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = order.slice(startIndex, startIndex + pageSize);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Products</h2>
        <table className="table table-bordered">
          <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Customer ID</th>
            <th className="border p-2">Ship Name</th>
            <th className="border p-2">City</th>
            <th className="border p-2">Country</th>
          </tr>
          </thead>
          <tbody>
          {currentData.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border p-2">{order.orderID}</td>
              <td className="border p-2">{new Date(order.orderDate).toLocaleDateString()}</td>
              <td className="border p-2">{order.customerID}</td>
              <td className="border p-2">{order.shipName}</td>
              <td className="border p-2">{order.shipCity}</td>
              <td className="border p-2">{order.shipCountry}</td>
            </tr>
          ))}
          </tbody>
        </table>
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
    </>
  );
}

export default Testcomponent;
