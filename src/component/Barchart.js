import React,{useContext} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { FactContext } from "../context/FactProvider";

function Barchart() {
    const {selectedKpi,sortOption,factOverview} = useContext(FactContext)
  let formattedData = [];
  switch (selectedKpi) {
    case "Total Sales":
      formattedData = factOverview.map((d) => ({
        group: d.salerDate, // check this field
        value: d.saleOverview,
      }));
      break;
    case "Avg Order":
      formattedData = factOverview.map((d) => ({
        group: d.orderyear,
        value: d.avgOrderValue,
      }));
      break;
    case "revenue-by-category":
      formattedData = factOverview.map((d) => ({
        group: d.categoryName,
        value: d.revenue,
      }));
      break;
    default:
      formattedData = [];
  }
  switch(sortOption)
  {
    case "Value":
      formattedData.sort((a,b)=>{
        return a.value - b.value;
      })
      break;
      case "Date":
      formattedData.sort((a,b)=>{
        return new Date(a.group) - new Date(b.group);
      })
      break
  }
  console.log(formattedData);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="group" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default Barchart;
