import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { formToJSON } from "axios";
import { FactContext } from "../context/FactProvider";

function Linechart() {
  const {factOverview,selectedKpi,sortOption} = useContext(FactContext)
  let formattedData = [];
  switch (selectedKpi) {
    case "Total Sales":
      formattedData = factOverview.map((d) => ({
        group: d.salerDate,
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
  switch(sortOption){
    case "Value":
      formattedData.sort((a,b) =>{
        return a.value - b.value;
      })
      break;
    case "Date":
      formattedData.sort((a,b) =>{
        return new Date(a.group) - new Date(b.group);
      })
      break;
  }
  console.log(formattedData);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="group" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#007bff"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Linechart;

