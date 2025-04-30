import React,{useState} from "react";

function Ordertable({ data }) {
  const [filteredData, setFilteredData] = useState(data);
  const [filterText, setFilterText] = useState("");
  const handleFilterChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
    const filtered = data.filter((item) => {
      return (item.ProductID.toLowerCase().includes(text.toLowerCase()))
    });
    setFilteredData(filtered);
  };
  return (
    <>
      <div className="container mt-5">
        <input
          type="text"
          placeholder="Filter..."
          value={filterText}
          onChange={handleFilterChange}
        />
        <h2 className="text-center mb-4">Products</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>OrderID</th>
              <th>ProductID</th>
              <th>UnitsPrice</th>
              <th>Quantity</th>
              <th>Discount</th>
            </tr>

          </thead>
          <tbody>
            {data.map((order => (
               <tr>
                 <td>{order.OrderID}</td>
                 <td>{order.ProductID}</td>
                 <td>{order.UnitsPrice}</td>
                 <td>{order.Quantity}</td> 
                 <td>{order.Discount}</td>
               </tr>
            )))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Ordertable;
