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

function Barchart({data,selectedKpi}) {
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
