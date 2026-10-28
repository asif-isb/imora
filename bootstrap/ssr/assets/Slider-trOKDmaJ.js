import { r as reactExports, K, m as me, j as jsxRuntimeExports } from "../ssr.js";
import Dashboard from "./Dashboard-CF0Ec2MP.js";
import { t as toast, T as Toaster } from "./index-Bou8ZpUI.js";
import { S as Swal } from "./sweetalert2.esm.all-CM8klxIU.js";
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
function Slider({ slides }) {
  const [showForm, setShowForm] = reactExports.useState(false);
  const { props } = K();
  const flash = (props == null ? void 0 : props.flash) || {};
  const [editingSlide, setEditingSlide] = reactExports.useState(null);
  const { data, setData, post, transform, delete: destroy, reset, processing, errors } = me({
    title: "",
    description: "",
    button_text: "",
    button_link: "",
    order: "",
    image: null
  });
  const [preview, setPreview] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (flash == null ? void 0 : flash.success) toast.success(flash.success);
    if (flash == null ? void 0 : flash.error) toast.error(flash.error);
  }, [flash]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only JPG and PNG formats are allowed.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error("Image size must be less than 2MB.");
        return;
      }
      setData("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleEdit = (slide) => {
    setEditingSlide(slide);
    setData({
      title: slide.title,
      description: slide.description,
      button_text: slide.button_text,
      button_link: slide.button_link,
      order: slide.order,
      image: null
    });
    setPreview(slide.image_url);
    setShowForm(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        destroy(route("slider.destroy", id), {
          onSuccess: () => {
            Swal.fire("Deleted!", "Your slide has been deleted.", "success");
          }
        });
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSlide) {
      transform((formData) => ({ ...formData, _method: "put" }));
      post(route("slider.update", editingSlide.id), {
        forceFormData: true,
        onSuccess: () => {
          reset();
          setPreview(null);
          setShowForm(false);
          setEditingSlide(null);
        },
        onError: (errors2) => console.log("Update error:", errors2)
      });
    } else {
      transform((formData) => formData);
      post(route("slider.store"), {
        forceFormData: true,
        onSuccess: () => {
          reset();
          setPreview(null);
          setShowForm(false);
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dashboard, { title: "Manage Sliders", description: "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-right", richColors: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "bg-green-600 text-white my-4 px-4 py-2 rounded hover:bg-green-700 transition mb-4",
        onClick: () => {
          setShowForm(!showForm);
          setEditingSlide(null);
          reset();
          setPreview(null);
        },
        children: showForm ? "Close Form" : "+ Add New Slide"
      }
    ),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-100 dark:bg-gray-700 p-6 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            value: data.title,
            onChange: (e) => setData("title", e.target.value),
            maxLength: 50,
            required: true
          }
        ),
        errors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: errors.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            value: data.description,
            onChange: (e) => setData("description", e.target.value),
            rows: "3",
            maxLength: 200,
            required: true
          }
        ),
        errors.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: errors.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Button Text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            value: data.button_text,
            onChange: (e) => setData("button_text", e.target.value),
            maxLength: 30,
            placeholder: "e.g., Get Quote",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Button Link" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "url",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            value: data.button_link,
            onChange: (e) => setData("button_link", e.target.value),
            placeholder: "https://example.com",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "number",
            className: "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500",
            value: data.order,
            onChange: (e) => setData("order", e.target.value),
            min: "1",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 dark:text-gray-300", children: "Image (1200x400, Max 2MB, JPG/PNG)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "w-full px-3 py-2 border rounded-lg", onChange: handleImageChange }),
        preview && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: preview, alt: "Preview", className: "mt-3 w-40 h-auto rounded-lg" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-green-600 text-white px-4 py-2 rounded-lg", children: processing ? "Saving..." : editingSlide ? "Update Slide" : "Save Slide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "bg-gray-500 text-white px-4 py-2 rounded-lg", onClick: () => setShowForm(false), children: "Cancel" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse border border-gray-300 dark:border-gray-700 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-100 dark:bg-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Image" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Button Text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Button Link" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: slides == null ? void 0 : slides.map((slide) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border border-gray-300 dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: slide.image, alt: slide.title, className: "w-40 h-auto rounded-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: slide.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: slide.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: slide.button_text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: slide.button_link, className: "text-blue-500", target: "_blank", rel: "noopener noreferrer", children: slide.button_link }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: slide.order }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 dark:border-gray-600 px-4 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleEdit(slide),
              className: "bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600",
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDelete(slide.id),
              className: "bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600",
              children: "Delete"
            }
          )
        ] }) })
      ] }, slide.id)) })
    ] }) })
  ] });
}
export {
  Slider as default
};
