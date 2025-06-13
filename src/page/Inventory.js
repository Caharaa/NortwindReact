import React, { useEffect, useContext, useState} from "react";
import axios from "axios";
import Producttable from "../component/Producttable";
import { InventoryContext } from "../context/InventoryProvider";
import Dialog from "../component/Dialog";


function Inventory() {
  const [isOpenModel,setIsOpenModel] = useState(false);
  const { setproducts } = useContext(InventoryContext);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:5047/api/Products", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setproducts(response.data);
        console.log("fetch successfully: ", response.data); // Log the response data directly
      })
      .catch((error) => {
        console.log("There was an error fetching the product list:", error);
      });
  }, []);


  return (
    <div className="container mt-4">
      <div>
        <button onClick={() => setIsOpenModel(true)}>add product</button>
      </div>
       <Dialog isOpen={isOpenModel} onClose={() => setIsOpenModel(false)}></Dialog>
      <Producttable></Producttable>
    </div>
  );
}

export default Inventory;
