import { j as jsxRuntimeExports } from "../ssr.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DP8axALD.js";
import AdminSidebar from "./AdminSidebar-B2DLZYli.js";
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
import "./ApplicationLogo-B-UT6Pkc.js";
import "./transition-Do-OiQ4t.js";
function Dashboard({ children, title = "Dashboard", description = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthenticatedLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen bg-gray-100 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-3900 dark:text-gray-100", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-300", children: description }),
      children,
      " "
    ] }) })
  ] }) });
}
export {
  Dashboard as default
};
