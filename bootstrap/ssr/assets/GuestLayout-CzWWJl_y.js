import { j as jsxRuntimeExports, $ as $e } from "../ssr.js";
import { A as ApplicationLogo } from "./ApplicationLogo-B-UT6Pkc.js";
/* empty css                   */
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex flex-column min-vh-100 justify-content-center align-items-center bg-light", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLogo, { className: "img-fluid", style: { height: "80px" } }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "guestContainer", children })
  ] });
}
export {
  GuestLayout as G
};
