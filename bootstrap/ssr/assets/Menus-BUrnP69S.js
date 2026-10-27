import { K, j as jsxRuntimeExports, $ as $e, R as React, S as Sr } from "../ssr.js";
import Dashboard from "./Dashboard-BJGg0EZV.js";
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
function Menus() {
  const { menus } = K().props;
  function handleDelete(id) {
    if (confirm("Are you sure you want to delete this menu?")) {
      Sr.delete(route("menu.destroy", id));
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: "Menu Management", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      $e,
      {
        href: route("menu.create"),
        className: "bg-green-600 text-white my-4 px-4 py-2 rounded mb-4 inline-block hover:bg-green-700 transition",
        children: "+ Add New Menu Item"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full border border-gray-200 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b", children: "Link" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b", children: "Parent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 border-b text-center", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: menus.map((menu) => {
        var _a;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-gray-800", children: menu.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: menu.link || "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: menu.order ?? "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                $e,
                {
                  href: route("menu.edit", menu.id),
                  className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm",
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDelete(menu.id),
                  className: "bg-red-600 text-white ms-4 px-3 py-1 rounded hover:bg-red-700 transition text-sm",
                  children: "Delete"
                }
              )
            ] })
          ] }),
          (_a = menu.children) == null ? void 0 : _a.map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50 hover:bg-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 pl-6 text-gray-700", children: [
              "↳ ",
              sub.title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: sub.link || "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: menu.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-gray-600", children: sub.order ?? "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "p-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                $e,
                {
                  href: route("menu.edit", sub.id),
                  className: "bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm",
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => handleDelete(sub.id),
                  className: "bg-red-600 text-white ms-4 px-3 py-1 rounded hover:bg-red-700 transition text-sm",
                  children: "Delete"
                }
              )
            ] })
          ] }, sub.id))
        ] }, menu.id);
      }) })
    ] }) })
  ] });
}
export {
  Menus as default
};
