import { r as reactExports, S as Sr, j as jsxRuntimeExports, L as Le } from "../ssr.js";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-DP8axALD.js";
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
const Pages = () => {
  const [pages, setPages] = reactExports.useState([]);
  const [selectedPage, setSelectedPage] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    title: "",
    slug: "",
    content: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    fetchPages();
  }, []);
  const fetchPages = async () => {
    try {
      const response = await Sr.get(route("admin.pages.index"));
      setPages(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pages:", error);
      setLoading(false);
    }
  };
  const handlePageSelect = (page) => {
    setSelectedPage(page);
  };
  const handleCreatePage = async (e) => {
    var _a, _b;
    e.preventDefault();
    setErrors({});
    try {
      const response = await Sr.post(route("admin.pages.store"), formData);
      if (response.data) {
        setPages([...pages, response.data]);
        setIsModalOpen(false);
        setFormData({ title: "", slug: "", content: "" });
      }
    } catch (error) {
      if ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (name === "title") {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      setFormData((prev) => ({
        ...prev,
        slug
      }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthenticatedLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Le, { title: "Pages Management" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-gray-900 dark:text-gray-100", children: "Pages Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsModalOpen(true),
            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: "Create Page"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-1/3 border-r dark:border-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100", children: "Pages" }),
          loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 dark:text-gray-400", children: "Loading pages..." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: pages.map((page) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              onClick: () => handlePageSelect(page),
              className: `p-3 rounded-lg cursor-pointer transition-colors ${(selectedPage == null ? void 0 : selectedPage.id) === page.id ? "bg-blue-100 dark:bg-blue-900" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-gray-900 dark:text-gray-100", children: page.title })
            },
            page.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100", children: selectedPage ? "Page Properties" : "Select a page" }),
          selectedPage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-gray-900 dark:text-gray-100", children: selectedPage.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Slug" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-gray-900 dark:text-gray-100", children: selectedPage.slug })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Content" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-gray-900 dark:text-gray-100", children: selectedPage.content })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-600 dark:text-gray-400", children: "Select a page from the list to view its properties" })
        ] })
      ] })
    ] }) }) }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100", children: "Create New Page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleCreatePage, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                name: "title",
                value: formData.title,
                onChange: handleInputChange,
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              }
            ),
            errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.title[0] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Slug" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                name: "slug",
                value: formData.slug,
                onChange: handleInputChange,
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              }
            ),
            errors.slug && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.slug[0] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                name: "content",
                value: formData.content,
                onChange: handleInputChange,
                rows: "4",
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              }
            ),
            errors.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-600", children: errors.content[0] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end space-x-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsModalOpen(false),
              className: "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
              children: "Create"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};
export {
  Pages as default
};
