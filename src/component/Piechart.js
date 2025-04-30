import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF"];

function Piechart({ data, selectedKpi }) {
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
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={formattedData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ group }) => group}
        >
          {formattedData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Piechart;
