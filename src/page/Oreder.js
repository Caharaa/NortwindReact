import React,{useEffect,useContext}from 'react'
import Testcomponent from '../component/Testcomponent';
import { OrderContext } from '../context/OrderProvider';
import axios from 'axios';

function Oreder() {
  const {setOrder} = useContext(OrderContext);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get('http://localhost:5047/api/Orders/Orderlist',{ headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"}})
    .then(response => {
      setOrder(response.data);
      console.log("fetch successfully: ", response.data); // Log the response data directly
    })
    .catch(error => {
      console.log("There was an error fetching the product list:", error);
    });
  },[])
  
  return (
    <>
    <Testcomponent></Testcomponent>
    </>
  )
}

export default Oreder
