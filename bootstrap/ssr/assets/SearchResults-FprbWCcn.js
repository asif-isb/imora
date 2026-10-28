import { j as jsxRuntimeExports, r as reactExports, $ as $e } from "../ssr.js";
import { C as CartProvider, L as Layout, M as Modal } from "./web-BbzYlKnC.js";
import { u as useCart, B as Button, C as CartItems } from "./CartItems-BvaR_XrL.js";
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
import "./index-BnY4fGey.js";
import "./index-k2HQ-qxt.js";
import "./index-ByDHPYIw.js";
import "./index-Bou8ZpUI.js";
import "./sweetalert2.esm.all-CM8klxIU.js";
function SearchResultsWrapper(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchResults, { ...props }) });
}
function SearchResults({ products, query }) {
  const { dispatch } = useCart();
  const [showModal, setShowModal] = reactExports.useState(false);
  const [showCart, setShowCart] = reactExports.useState(false);
  const [addedProduct, setAddedProduct] = reactExports.useState(null);
  const handleAddToCart = (product) => {
    const displayPrice = product.discount ? product.price - product.discount : product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        image: product.image,
        price: displayPrice,
        originalPrice: product.price,
        discount: product.discount
      }
    });
    setAddedProduct({ ...product, displayPrice });
    setShowModal(true);
  };
  const handleCheckout = () => {
    setShowModal(false);
    setShowCart(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 h4", children: [
      "Search Results for: ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-success", children: [
        '"',
        query,
        '"'
      ] })
    ] }),
    products.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted", children: "No products found." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row g-4", children: products.map((product) => {
      var _a, _b;
      const displayPrice = product.discount ? product.price - product.discount : product.price;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row g-0 align-items-center py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-2 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: `/${product.category.slug}/${product.slug}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "img-fluid rounded-start",
            style: { maxHeight: "130px", objectFit: "cover" }
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            $e,
            {
              href: `/${product.category.slug}/${product.slug}`,
              className: "text-decoration-none text-dark",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "card-title mb-1", children: product.name })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "card-subtitle text-muted mb-1", children: [
            "Category: ",
            (_a = product.category) == null ? void 0 : _a.name
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "card-text text-truncate small", children: [
            (_b = product.description) == null ? void 0 : _b.replace(/<[^>]+>/g, "").slice(0, 200),
            "..."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-3 text-center pe-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
          product.discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted text-decoration-line-through small", children: [
            "Rs ",
            product.price
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fw-bold text-success mb-2", children: [
            "Rs ",
            displayPrice.toFixed(2)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "btn btn-success btn-sm w-50 mt-3",
              onClick: () => handleAddToCart(product),
              children: "Add to Cart"
            }
          )
        ] }) })
      ] }) }) }, product.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show: showModal, onHide: () => setShowModal(false), centered: true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: "Item Added to Cart!" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Body, { children: addedProduct && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: addedProduct.image,
            alt: addedProduct.name,
            style: { width: "60px", height: "60px", objectFit: "cover" },
            className: "me-3"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-1", children: addedProduct.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
            "Rs ",
            addedProduct.displayPrice.toFixed(2),
            "/-"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: () => setShowModal(false), children: "Continue Shopping" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: handleCheckout, children: "Checkout" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `cart-drawer-backdrop ${showCart ? "show" : ""}`,
        onClick: () => setShowCart(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `cart-drawer ${showCart ? "show" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-bottom d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0", children: "Shopping Cart" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "btn-close",
            onClick: () => setShowCart(false),
            "aria-label": "Close"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cart-drawer-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartItems, { onClose: () => setShowCart(false) }) })
    ] })
  ] }) });
}
export {
  SearchResultsWrapper as default
};
