import React from "react";
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

function Barchart({data,selectedKpi,sortOption}) {
  let formattedData = [];

  switch (selectedKpi) {
    case "Total Sales":
      formattedData = data.map((d) => ({
        group: d.salerDate, // check this field
        value: d.saleOverview,
      }));
      break;
    case "Avg Order":
      formattedData = data.map((d) => ({
        group: d.orderyear,
        value: d.avgOrderValue,
      }));
      break;
    case "revenue-by-category":
      formattedData = data.map((d) => ({
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
        return a.group - b.group;
      })
      break
  }

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
