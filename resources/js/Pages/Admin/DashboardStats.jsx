// resources/js/Components/Admin/DashboardStats.jsx
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

// Same hues as STATUS_STYLES (yellow, blue, green, red), keyed by status name
const STATUS_COLORS = {
  pending: "#eab308",    // yellow
  dispatched: "#3b82f6", // blue
  completed: "#22c55e",  // green
  canceled: "#ef4444",   // red
  cancelled: "#ef4444",  // alternate spelling, same red
};

const FALLBACK_COLOR = "#9ca3af"; // gray for any unknown status

const getStatusColor = (status) =>
  STATUS_COLORS[String(status ?? "").trim().toLowerCase()] || FALLBACK_COLOR;

export default function DashboardStats({ ordersData, productSales }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Pie Chart */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">Order Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={ordersData}
              dataKey="value"
              nameKey="order_status"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {ordersData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getStatusColor(entry.order_status)}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">Product Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productSales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <style>
        {`
            .recharts-pie-label-text {
            fill: black !important;
            font-weight: 500;
            }
        `}
        </style>

    </div>

  );
}