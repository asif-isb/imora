import { K, r as reactExports, j as jsxRuntimeExports, S as Sr } from "../ssr.js";
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
function MenuEdit() {
  const { menu, menus } = K().props;
  const [form, setForm] = reactExports.useState({
    title: menu.title || "",
    link: menu.link || "",
    parent_id: menu.parent_id || "",
    order: menu.order || 0
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    Sr.put(route("menu.update", menu.id), form);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { title: "Edit Menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Menu Title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "w-full border rounded px-2 py-1",
          value: form.title,
          onChange: (e) => setForm((f) => ({ ...f, title: e.target.value })),
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Link (for submenus)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "w-full border rounded px-2 py-1",
          value: form.link,
          onChange: (e) => setForm((f) => ({ ...f, link: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Parent Menu (for submenus)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          className: "w-full border rounded px-2 py-1",
          value: form.parent_id,
          onChange: (e) => setForm((f) => ({ ...f, parent_id: e.target.value })),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "None (Main Menu)" }),
            menus.filter((m) => m.id !== menu.id).map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m.id, children: m.title }, m.id))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Order" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "number",
          className: "w-full border rounded px-2 py-1",
          value: form.order,
          onChange: (e) => setForm((f) => ({ ...f, order: e.target.value }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", type: "submit", children: "Update Menu" })
  ] }) });
}
export {
  MenuEdit as default
};
