import { m as me, j as jsxRuntimeExports, L as Le } from "../ssr.js";
import { T as TextInput, I as InputError } from "./TextInput-BkQEjsOi.js";
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
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = me({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Forgot Password" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm text-gray-600 dark:text-gray-400", children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
    status && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 text-sm font-medium text-green-600 dark:text-green-400", children: status }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          isFocused: true,
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputError, { message: errors.email, className: "mt-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PrimaryButton, { className: "ms-4", disabled: processing, children: "Email Password Reset Link" }) })
    ] })
  ] });
}
export {
  ForgotPassword as default
};
