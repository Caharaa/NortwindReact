import React,{useState,useEffect}from 'react'
import Ordertable from '../component/Ordertable'
import Testcomponent from '../component/Testcomponent';
import axios from 'axios';
function Oreder() {
  const [order,setorder] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get('http://localhost:5047/api/Orders/Orderlist',{ headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"}})
    .then(response => {
      setorder(response.data);
      console.log("fetch successfully: ", response.data); // Log the response data directly
    })
    .catch(error => {
      console.log("There was an error fetching the product list:", error);
    });
  },[])
  
  return (
    <>
    <Testcomponent data={order}></Testcomponent>
    </>
  )
}

export default Oreder
