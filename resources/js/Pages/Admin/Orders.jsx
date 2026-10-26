import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import Dashboard from "../Dashboard";

// "Thursday November 6, 2026 02:15 PM"
const formatPlacedOn = (value) => {
  const d = new Date(value);
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${weekday} ${month} ${d.getDate()}, ${d.getFullYear()} ${time}`;
};

// Value used for sorting each column (taken from the first row of an order)
const SORT_VALUES = {
  order: (g, orderNumber) => orderNumber,
  product: (g) => g[0].product?.name || "",
  customer: (g) => g[0].name || "",
  phone: (g) => g[0].phone || "",
  status: (g) => g[0].order_status || "",
  placed: (g) => new Date(g[0].created_at).getTime(),
};

export default function Orders() {
  const { orders, stats = {} } = usePage().props;
  const [sort, setSort] = useState({ key: null, dir: "asc" });

  const handleSort = (key) => {
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
        : { key, dir: "asc" }
    );
  };

  // Group orders by order number
  const grouped = orders.data.reduce((acc, order) => {
    if (!acc[order.order_number]) {
      acc[order.order_number] = [];
    }
    acc[order.order_number].push(order);
    return acc;
  }, {});

  // Sort whole orders (groups) so rowSpan keeps working
  let groups = Object.entries(grouped);
  if (sort.key) {
    const getValue = SORT_VALUES[sort.key];
    groups = [...groups].sort(([numA, gA], [numB, gB]) => {
      const a = getValue(gA, numA);
      const b = getValue(gB, numB);
      const result =
        typeof a === "number" && typeof b === "number"
          ? a - b
          : String(a).localeCompare(String(b), undefined, { sensitivity: "base" });
      return sort.dir === "asc" ? result : -result;
    });
  }

  const SortableTh = ({ label, sortKey }) => (
    <th
      className="px-4 py-2 border cursor-pointer select-none hover:bg-blue-200 whitespace-nowrap"
      onClick={() => handleSort(sortKey)}
    >
      {label}
      <span className="ml-1 text-xs text-gray-600">
        {sort.key === sortKey ? (sort.dir === "asc" ? "▲" : "▼") : "⇅"}
      </span>
    </th>
  );

  return (
    <Dashboard title="All Orders" description="Manage customer orders">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Stats panel */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {[
            { label: "Total Orders", value: stats.total, color: "#374151" },
            { label: "New Today", value: stats.new_today, color: "#c29522" },
            { label: "Pending", value: stats.pending, color: "#f97316" },
            { label: "Dispatched", value: stats.dispatched, color: "#3b82f6" },
            { label: "Completed", value: stats.completed, color: "#16a34a" },
            { label: "Canceled", value: stats.canceled, color: "#ef4444" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-lg shadow-sm border p-4"
              style={{ borderTop: `4px solid ${s.color}` }}
            >
              <p className="text-xs uppercase tracking-wide text-gray-500">{s.label}</p>
              <p className="text-2xl font-bold mt-1" style={{ color: s.color }}>
                {s.value ?? 0}
              </p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto border rounded shadow-sm">
          <table className="min-w-full bg-white border">
            <thead className="bg-blue-100 text-left">
              <tr>
                <SortableTh label="Order #" sortKey="order" />
                <SortableTh label="Product" sortKey="product" />
                <SortableTh label="Customer" sortKey="customer" />
                <SortableTh label="Phone" sortKey="phone" />
                <SortableTh label="Status" sortKey="status" />
                <SortableTh label="Placed On" sortKey="placed" />
              </tr>
            </thead>
            <tbody>
              {groups.map(([orderNumber, orderGroup], groupIndex) =>
                orderGroup.map((order, index) => (
                  <tr
                    key={order.id}
                    className={`${groupIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} ${
                      index === 0 ? "border-t-2 border-blue-300" : ""
                    }`}
                  >
                    {index === 0 && (
                      <td
                        className="px-4 py-2 border font-mono text-blue-700 font-semibold"
                        rowSpan={orderGroup.length}
                      >
                        <Link
                          href={route("dashboard.orders.show", orderNumber)}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {orderNumber}
                        </Link>
                      </td>
                    )}
                    <td className="px-4 py-2 border">{order.product?.name || "—"}</td>
                    <td className="px-4 py-2 border">{order.name}</td>
                    <td className="px-4 py-2 border">{order.phone}</td>
                    <td
                    className={`px-4 py-2 border capitalize text-black text-center ${
                        order.order_status === "pending"
                        ? "bg-orange-400"
                        : order.order_status === "dispatched"
                        ? "bg-blue-400"
                        : order.order_status === "completed"
                        ? "bg-green-600"
                        : order.order_status === "canceled"
                        ? "bg-red-500"
                        : "bg-gray-300"
                    }`}
                    >
                    {order.order_status}
                    </td>

                    <td className="px-4 py-2 border text-sm">
                      {formatPlacedOn(order.created_at)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          {orders.links.length > 3 && (
            <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
              {orders.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.url || "#"}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                  className={`px-4 py-2 border text-sm ${
                    link.active ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                  } ${!link.url ? "pointer-events-none text-gray-400" : ""}`}
                />
              ))}
            </nav>
          )}
        </div>
      </div>
    </Dashboard>
  );
}