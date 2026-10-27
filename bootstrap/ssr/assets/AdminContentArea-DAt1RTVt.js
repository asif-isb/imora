import { r as reactExports, a as axios, j as jsxRuntimeExports } from "../ssr.js";
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
function AdminContentArea({ selectedRoute }) {
  const [content, setContent] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (selectedRoute) {
      axios.get(selectedRoute).then((response) => setContent(response.data)).catch((error) => console.error("Error fetching data:", error));
    }
  }, [selectedRoute]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-6", children: content ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100", children: content.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-300", children: content.description })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100", children: "Welcome to the Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 dark:text-gray-300", children: "You are successfully logged in!" })
  ] }) }) });
}
export {
  AdminContentArea as default
};
