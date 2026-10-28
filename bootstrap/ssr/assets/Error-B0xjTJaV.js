import { j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { C as CartProvider, L as Layout } from "./web-BbzYlKnC.js";
import { S as Seo } from "./Seo-DIkP9BEz.js";
/* empty css                   */
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
import "./CartItems-BvaR_XrL.js";
import "./index-BnY4fGey.js";
import "./index-k2HQ-qxt.js";
import "./index-ByDHPYIw.js";
import "./index-Bou8ZpUI.js";
import "./sweetalert2.esm.all-CM8klxIU.js";
const messages = {
  403: { title: "Access denied", text: "You do not have permission to view this page." },
  404: { title: "Page not found", text: "The page you are looking for does not exist or has moved." },
  500: { title: "Server error", text: "Something went wrong on our side. Please try again shortly." },
  503: { title: "Back soon", text: "We are doing some maintenance. Please check back shortly." }
};
function Error({ status = 404 }) {
  const { title, text } = messages[status] || messages[404];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CartProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Seo, { title: `${status} - ${title}`, noindex: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "text-center py-5 my-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "display-4 fw-bold mb-2", children: status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "h3 mb-3", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4", children: text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/", className: "btn btn-custom", children: "Back to home" })
    ] }) })
  ] });
}
export {
  Error as default
};
