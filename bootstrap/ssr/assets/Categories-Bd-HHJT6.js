import { r as reactExports, m as me, j as jsxRuntimeExports } from "../ssr.js";
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
function Categories({ categories = [] }) {
  const [showForm, setShowForm] = reactExports.useState(false);
  const [editing, setEditing] = reactExports.useState(null);
  const { data, setData, post, put, delete: destroy, processing, reset } = me({
    name: "",
    parent_id: ""
  });
  const startEdit = (cat) => {
    setEditing(cat.id);
    setData({
      name: cat.name,
      parent_id: cat.parent_id || ""
    });
    setShowForm(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      put(route("dashboard.categories.update", editing), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success("Category updated successfully");
          reset();
          setEditing(null);
          setShowForm(false);
        },
        onError: () => toast.error("Error updating category.")
      });
    } else {
      post(route("dashboard.categories.store"), {
        preserveScroll: true,
        onSuccess: () => {
          toast.success("Category added successfully");
          reset();
          setShowForm(false);
        },
        onError: () => toast.error("Error adding category.")
      });
    }
  };
  const deleteCategory = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      destroy(route("dashboard.categories.delete", id), {
        preserveScroll: true,
        onSuccess: () => toast.success("Category deleted."),
        onError: () => toast.error("Failed to delete category.")
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: "Manage Categories", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-white rounded shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Categories" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700",
            onClick: () => {
              reset();
              setEditing(null);
              setShowForm(!showForm);
            },
            children: editing ? "Cancel Edit" : "+ Add Category"
          }
        )
      ] }),
      showForm && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mb-6 p-4 border rounded bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-1", children: "Category Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "border px-3 py-2 w-full rounded",
                value: data.name,
                onChange: (e) => setData("name", e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-semibold mb-1", children: "Parent Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: "border px-3 py-2 w-full rounded",
                value: data.parent_id,
                onChange: (e) => setData("parent_id", e.target.value),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "None (Top-level)" }),
                  categories.filter((cat) => cat.id !== editing).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cat.id, children: cat.name }, cat.id))
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded",
            disabled: processing,
            children: [
              editing ? "Update" : "Save",
              " Category"
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full table-auto border border-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "#" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "Parent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 border", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: categories.length > 0 ? categories.map((cat, index) => {
          var _a;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: index + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: cat.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border px-4 py-2", children: ((_a = cat.parent) == null ? void 0 : _a.name) || "-" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "border px-4 py-2 space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm",
                  onClick: () => startEdit(cat),
                  children: "Edit"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm",
                  onClick: () => deleteCategory(cat.id),
                  children: "Delete"
                }
              )
            ] })
          ] }, cat.id);
        }) : /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center py-4", colSpan: "4", children: "No categories found." }) }) })
      ] })
    ] })
  ] });
}
export {
  Categories as default
};
