import { j as jsxRuntimeExports, m as me, L as Le, $ as $e } from "../ssr.js";
import { T as TextInput, I as InputError } from "./TextInput-BkQEjsOi.js";
import { I as InputLabel } from "./InputLabel-DqLIXWHt.js";
import { P as PrimaryButton } from "./PrimaryButton-CoJh6CQZ.js";
import { G as GuestLayout } from "./GuestLayout-CzWWJl_y.js";
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
/* empty css                   */
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = me({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Log in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mt-5 d-flex justify-content-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card p-4 shadow-sm", style: { width: "400px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center mb-4", children: "Sign in to your account" }),
      status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "alert alert-success", role: "alert", children: status }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "email", value: "Email", className: "form-label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextInput,
            {
              id: "email",
              type: "email",
              name: "email",
              value: data.email,
              className: "form-control",
              autoComplete: "username",
              isFocused: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email, className: "text-danger mt-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { htmlFor: "password", value: "Password", className: "form-label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TextInput,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              className: "form-control",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.password, className: "text-danger mt-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 form-check d-flex justify-content-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-check-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                name: "remember",
                checked: data.remember,
                onChange: (e) => setData("remember", e.target.checked)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ms-2", children: "Remember me" })
          ] }),
          canResetPassword && /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              href: route("password.request"),
              className: "text-decoration-none",
              children: "Forgot your password?"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { className: "btn btn-primary", disabled: processing, children: "Log in" }) })
      ] })
    ] }) })
  ] });
}
export {
  Login as default
};
