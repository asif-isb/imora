import { j as jsxRuntimeExports, L as Le } from "../ssr.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DP8axALD.js";
import DeleteUserForm from "./DeleteUserForm-DLri19CJ.js";
import UpdatePasswordForm from "./UpdatePasswordForm-QYz3eBL7.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-B27Ytvzx.js";
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
import "./TextInput-BkQEjsOi.js";
import "./InputLabel-DqLIXWHt.js";
import "./index-ByDHPYIw.js";
import "./PrimaryButton-CoJh6CQZ.js";
function Edit({ mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold leading-tight text-gray-800", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white p-4 shadow sm:rounded-lg sm:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
