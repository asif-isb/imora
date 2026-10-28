import { K, m as me, j as jsxRuntimeExports, S as Sr } from "../ssr.js";
import Dashboard from "./Dashboard-CF0Ec2MP.js";
import { T as Toaster, t as toast } from "./index-Bou8ZpUI.js";
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
import "./index-ByDHPYIw.js";
const PAYMENT_LABELS = {
  cash: "Cash on Delivery",
  easypaisa: "EasyPaisa",
  jazzcash: "JazzCash",
  bank: "Bank Transfer"
};
const STATUS_STYLES = {
  pending: "bg-yellow-100 text-yellow-800",
  dispatched: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800"
};
const priceInfo = (product) => {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  return { price, discount, final: price - price * discount / 100 };
};
function OrderDetail() {
  const { orders, orderNumber } = K().props;
  const order = orders[0];
  const orderDate = new Date(order.created_at).toLocaleString();
  const originalTotal = orders.reduce((sum, o) => sum + priceInfo(o.product).price, 0);
  const totalAmount = orders.reduce((sum, o) => sum + priceInfo(o.product).final, 0);
  const savings = originalTotal - totalAmount;
  const { data, setData, processing } = me({
    status: order.order_status
  });
  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    Sr.post(
      route("dashboard.orders.updatestatus", orderNumber),
      { status: newStatus },
      {
        preserveScroll: true,
        onSuccess: () => {
          toast.success("Order status updated!");
          setData("status", newStatus);
        },
        onError: () => toast.error("Failed to update status.")
      }
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: `Order Details – ${orderNumber}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "printable-area", className: "max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 flex justify-between items-center", style: { backgroundColor: "#c29522" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-2xl font-extrabold tracking-widest", children: "IMORA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm opacity-90", children: "Order Invoice" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row justify-between md:items-start mb-6 border-b pb-4 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-semibold mb-1", children: [
              "Order #: ",
              orderNumber
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-sm", children: [
              "Order Date: ",
              orderDate
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${STATUS_STYLES[data.status] || "bg-gray-100 text-gray-700"}`,
                children: data.status
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 print:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium text-gray-600 mr-2", children: "Status:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  value: data.status,
                  onChange: handleStatusChange,
                  disabled: processing,
                  className: "border px-3 py-2 pr-10 rounded text-sm focus:outline-none focus:ring focus:border-blue-400 transition",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pending" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dispatched", children: "Dispatched" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Completed" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "canceled", children: "Canceled" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => window.print(),
                className: "bg-gray-500 text-white text-sm px-4 py-2 rounded hover:bg-gray-800",
                children: "🖨️ Print"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6 bg-gray-50 rounded-lg p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Customer Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: order.name })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: order.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: order.email || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: order.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Payment Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: PAYMENT_LABELS[order.payment_method] || order.payment_method })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500", children: "Transaction ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-800", children: order.transaction_id || "—" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto border rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full text-sm border-collapse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border text-right", children: "Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border text-right", children: "Discount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border text-right", children: "Total" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orders.map((o, i) => {
            var _a;
            const { price, discount, final } = priceInfo(o.product);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: o.product.image,
                    alt: o.product.name,
                    className: "w-12 h-12 object-cover rounded"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: o.product.name })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border", children: ((_a = o.product.category) == null ? void 0 : _a.name) || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2 border text-right", children: [
                "Rs ",
                price.toFixed(2)
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 border text-right", children: discount > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white", style: { backgroundColor: "#c29522" }, children: [
                "-",
                discount,
                "%"
              ] }) : "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-2 border text-right font-semibold", style: { color: "#9b5d24" }, children: [
                "Rs ",
                final.toFixed(2)
              ] })
            ] }, i);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full sm:w-72 text-sm space-y-1", children: [
          savings > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-gray-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-through", children: [
                "Rs ",
                originalTotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-green-700 font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "- Rs ",
                savings.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-bold border-t-2 pt-2", style: { borderColor: "#c29522" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#9b5d24" }, children: [
              "Rs ",
              totalAmount.toFixed(2)
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  OrderDetail as default
};
