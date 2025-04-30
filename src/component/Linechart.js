import React from "react";
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

function Linechart({ data ,selectedKpi}) {
  let formattedData = [];

  switch (selectedKpi) {
    case "Total Sales":
      formattedData = data.map((d) => ({
        group: d.salerDate,
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
  console.log(formattedData)

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

