import React from "react";
import { useState,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InventoryContext } from '../context/InventoryProvider';
function Producttable() {
  const {products} = useContext(InventoryContext)
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const totalPages = Math.ceil(products.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = products.slice(startIndex, currentPage * pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Products</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ProductID</th>
              <th>ProductName</th>
              <th>UnitsInStock</th>
              <th>UnitsOnOrder</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((pro) => (
              <tr>
                <td>{pro.productID}</td>
                <td>{pro.productName}</td>
                <td>{pro.unitsInStock}</td>
                <td>{pro.unitsOnOrder}</td>
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

export default Producttable;
