import { K, r as reactExports, j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import Dashboard from "./Dashboard-CF0Ec2MP.js";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "crypto";
import "assert";
import "tty";
import "os";
import "zlib";
import "events";
import "process";
import "async_hooks";
import "./AuthenticatedLayout-DP8axALD.js";
import "./ApplicationLogo-B-UT6Pkc.js";
import "./transition-Do-OiQ4t.js";
import "./AdminSidebar-B2DLZYli.js";
const formatPlacedOn = (value) => {
  const d = new Date(value);
  const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
  const month = d.toLocaleDateString("en-US", { month: "long" });
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  return `${weekday} ${month} ${d.getDate()}, ${d.getFullYear()} ${time}`;
};
const SORT_VALUES = {
  order: (g, orderNumber) => orderNumber,
  product: (g) => {
    var _a;
    return ((_a = g[0].product) == null ? void 0 : _a.name) || "";
  },
  customer: (g) => g[0].name || "",
  phone: (g) => g[0].phone || "",
  status: (g) => g[0].order_status || "",
  placed: (g) => new Date(g[0].created_at).getTime()
};
function Orders() {
  const { orders, stats = {} } = K().props;
  const [sort, setSort] = reactExports.useState({ key: null, dir: "asc" });
  const handleSort = (key) => {
    setSort(
      (prev) => prev.key === key ? { key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }
    );
  };
  const grouped = orders.data.reduce((acc, order) => {
    if (!acc[order.order_number]) {
      acc[order.order_number] = [];
    }
    acc[order.order_number].push(order);
    return acc;
  }, {});
  let groups = Object.entries(grouped);
  if (sort.key) {
    const getValue = SORT_VALUES[sort.key];
    groups = [...groups].sort(([numA, gA], [numB, gB]) => {
      const a = getValue(gA, numA);
      const b = getValue(gB, numB);
      const result = typeof a === "number" && typeof b === "number" ? a - b : String(a).localeCompare(String(b), void 0, { sensitivity: "base" });
      return sort.dir === "asc" ? result : -result;
    });
  }
  const SortableTh = ({ label, sortKey }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "th",
    {
      className: "px-4 py-2 border cursor-pointer select-none hover:bg-blue-200 whitespace-nowrap",
      onClick: () => handleSort(sortKey),
      children: [
        label,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-xs text-gray-600", children: sort.key === sortKey ? sort.dir === "asc" ? "▲" : "▼" : "⇅" })
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { title: "All Orders", description: "Manage customer orders", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6", children: [
      { label: "Total Orders", value: stats.total, color: "#374151" },
      { label: "New Today", value: stats.new_today, color: "#c29522" },
      { label: "Pending", value: stats.pending, color: "#f97316" },
      { label: "Dispatched", value: stats.dispatched, color: "#3b82f6" },
      { label: "Completed", value: stats.completed, color: "#16a34a" },
      { label: "Canceled", value: stats.canceled, color: "#ef4444" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white rounded-lg shadow-sm border p-4",
        style: { borderTop: `4px solid ${s.color}` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wide text-gray-500", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold mt-1", style: { color: s.color }, children: s.value ?? 0 })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto border rounded shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-blue-100 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Order #", sortKey: "order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Product", sortKey: "product" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Customer", sortKey: "customer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Phone", sortKey: "phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Status", sortKey: "status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SortableTh, { label: "Placed On", sortKey: "placed" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: groups.map(
        ([orderNumber, orderGroup], groupIndex) => orderGroup.map((order, index) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "tr",
            {
              className: `${groupIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} ${index === 0 ? "border-t-2 border-blue-300" : ""}`,
              children: [
                index === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: "px-4 py-2 border font-mono text-blue-700 font-semibold",
                    rowSpan: orderGroup.length,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      $e,
                      {
                        href: route("dashboard.orders.show", orderNumber),
                        className: "hover:underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: orderNumber
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border", children: ((_a = order.product) == null ? void 0 : _a.name) || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border", children: order.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border", children: order.phone }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "td",
                  {
                    className: `px-4 py-2 border capitalize text-black text-center ${order.order_status === "pending" ? "bg-orange-400" : order.order_status === "dispatched" ? "bg-blue-400" : order.order_status === "completed" ? "bg-green-600" : order.order_status === "canceled" ? "bg-red-500" : "bg-gray-300"}`,
                    children: order.order_status
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border text-sm", children: formatPlacedOn(order.created_at) })
              ]
            },
            order.id
          );
        })
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: orders.links.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "inline-flex rounded-md shadow-sm", "aria-label": "Pagination", children: orders.links.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        href: link.url || "#",
        dangerouslySetInnerHTML: { __html: link.label },
        className: `px-4 py-2 border text-sm ${link.active ? "bg-blue-600 text-white" : "bg-white text-gray-700"} ${!link.url ? "pointer-events-none text-gray-400" : ""}`
      },
      i
    )) }) })
  ] }) });
}
export {
  Orders as default
};
