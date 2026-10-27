import { j as jsxRuntimeExports } from "../ssr.js";
import Dashboard from "./Dashboard-BJGg0EZV.js";
import DashboardStats from "./DashboardStats-zXPgBqFt.js";
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
import "./index-k2HQ-qxt.js";
import "./index-ByDHPYIw.js";
function Home({ title, description, ordersData, productSales }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { title, description, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardStats, { ordersData, productSales }) }) });
}
export {
  Home as default
};
