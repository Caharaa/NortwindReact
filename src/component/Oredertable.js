import React from 'react'
function Oredertable({orders}) {
  return (
    <div className="container mt-4">
    <h2 className="text-center mb-4" >Order List</h2>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Order Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.orderId}>
            <td>{order.orderId}</td>
            <td>{order.customerId}</td>
            <td>{order.orderDate}</td>
            <td>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Oredertable
