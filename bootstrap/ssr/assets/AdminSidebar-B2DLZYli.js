import { j as jsxRuntimeExports, $ as $e } from "../ssr.js";
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
function AdminSidebar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-64 bg-white dark:bg-gray-800 shadow-md h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 text-lg font-bold text-gray-900 dark:text-white", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          href: route("dashboard"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: "Home"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          href: route("menu.index"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: "Menu"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          href: route("slider.index"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: "Slider"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $e,
        {
          href: route("dashboard.products"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "bi bi-box-seam" }),
            " Products"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $e,
        {
          href: route("dashboard.orders"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "bi bi-box-seam" }),
            " Orders"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        $e,
        {
          href: route("dashboard.categories"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "bi bi-box-seam" }),
            " Categories"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          href: route("dashboard.settings"),
          className: "block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
          children: "Settings"
        }
      ) })
    ] }) })
  ] }) });
}
export {
  AdminSidebar as default
};
