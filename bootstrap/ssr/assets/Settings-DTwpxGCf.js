import { m as me, j as jsxRuntimeExports } from "../ssr.js";
import Dashboard from "./Dashboard-BJGg0EZV.js";
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
function Settings({ order_notification_email, default_phone }) {
  const {
    data: emailData,
    setData: setEmailData,
    post: postEmail,
    processing: processingEmail,
    errors: emailErrors
  } = me({
    order_notification_email: order_notification_email || ""
  });
  const {
    data: phoneData,
    setData: setPhoneData,
    post: postPhone,
    processing: processingPhone,
    errors: phoneErrors
  } = me({
    default_phone: default_phone || ""
  });
  const handleSaveEmail = (e) => {
    e.preventDefault();
    postEmail(route("dashboard.settings.saveemail"), {
      onSuccess: () => toast.success("Email saved successfully!"),
      onError: () => toast.error("Failed to save email.")
    });
  };
  const handleSavePhone = (e) => {
    e.preventDefault();
    postPhone(route("dashboard.settings.savephone"), {
      onSuccess: () => toast.success("Phone number saved successfully!"),
      onError: () => toast.error("Failed to save phone.")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: "Manage Settings", description: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSaveEmail,
          className: "flex flex-col space-y-4 border p-6 rounded shadow bg-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "font-semibold mb-2", children: "Set Notification Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "order_notification_email",
                  value: emailData.order_notification_email,
                  onChange: (e) => setEmailData("order_notification_email", e.target.value),
                  className: "border rounded px-3 py-2 w-full",
                  required: true
                }
              ),
              emailErrors.order_notification_email && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm mt-1", children: emailErrors.order_notification_email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "bg-blue-600 text-white px-4 py-2 rounded self-start",
                disabled: processingEmail,
                children: "Save Email"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSavePhone,
          className: "flex flex-col space-y-4 border p-6 rounded shadow bg-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "font-semibold mb-2", children: "Set Default Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "tel",
                  name: "default_phone",
                  value: phoneData.default_phone,
                  onChange: (e) => setPhoneData("default_phone", e.target.value),
                  className: "border rounded px-3 py-2 w-full",
                  required: true
                }
              ),
              phoneErrors.default_phone && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-500 text-sm mt-1", children: phoneErrors.default_phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "bg-green-600 text-white px-4 py-2 rounded self-start",
                disabled: processingPhone,
                children: "Save Phone"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  Settings as default
};
