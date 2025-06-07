import React, { useEffect, useContext} from 'react';
import axios from 'axios';
import Producttable from '../component/Producttable';
import { InventoryContext } from '../context/InventoryProvider';

function Inventory() {
  const {products,setproducts} = useContext(InventoryContext)
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get('http://localhost:5047/api/Products',{
      headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"}
    })
      .then(response => {
        setproducts(response.data);
        console.log("fetch successfully: ", response.data); // Log the response data directly
      })
      .catch(error => {
        console.log("There was an error fetching the product list:", error);
      });
  }, []);



  return (
    <div className="container mt-4">
      <Producttable></Producttable>
    </div>
  );
}

export default Inventory;

