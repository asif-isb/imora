import { j as jsxRuntimeExports, r as reactExports } from "../ssr.js";
import { u as useCart, B as Button, C as CartItems } from "./CartItems-CuhxiCeA.js";
import { C as CartProvider, L as Layout, M as Modal } from "./web-CkWK24Zo.js";
/* empty css                   */
import { S as Seo } from "./Seo-DIkP9BEz.js";
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
import "./index-Bou8ZpUI.js";
import "./index-ByDHPYIw.js";
import "./sweetalert2.esm.all-CM8klxIU.js";
const plantDetails = "_plantDetails_1e8qq_1";
const productImage = "_productImage_1e8qq_10";
const discountBadge = "_discountBadge_1e8qq_20";
const productInfo = "_productInfo_1e8qq_31";
const pricing = "_pricing_1e8qq_35";
const originalPrice = "_originalPrice_1e8qq_40";
const price = "_price_1e8qq_46";
const description = "_description_1e8qq_51";
const careInstructions = "_careInstructions_1e8qq_56";
const features = "_features_1e8qq_57";
const addToCartBtn = "_addToCartBtn_1e8qq_87";
const styles = {
  plantDetails,
  productImage,
  discountBadge,
  productInfo,
  pricing,
  originalPrice,
  price,
  description,
  careInstructions,
  features,
  addToCartBtn
};
const ShowContent = ({ product, seo }) => {
  var _a, _b;
  const { dispatch } = useCart();
  const [showModal, setShowModal] = reactExports.useState(false);
  const [showCart, setShowCart] = reactExports.useState(false);
  const price2 = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  const displayPrice = discount > 0 ? price2 - discount : price2;
  const categoryName = ((_a = product.category) == null ? void 0 : _a.name) || "Fragrance";
  const handleAddToCart = () => {
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
    setShowModal(true);
  };
  const handleContinueShopping = () => setShowModal(false);
  const handleCheckout = () => {
    setShowModal(false);
    setShowCart(true);
  };
  const care = product.care_instructions || {};
  const features2 = product.features || [];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: seo.description,
    image: [seo.image],
    url: seo.canonical,
    category: categoryName,
    brand: { "@type": "Brand", name: "IMORA" },
    ...displayPrice > 0 && {
      offers: {
        "@type": "Offer",
        price: displayPrice.toFixed(2),
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        url: seo.canonical
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Seo,
      {
        title: seo.title,
        description: seo.description,
        canonical: seo.canonical,
        image: seo.image,
        type: seo.type,
        keywords: [product.name, (_b = product.category) == null ? void 0 : _b.name, "perfume", "fragrance", "IMORA"].filter(Boolean),
        schema
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: styles.plantDetails, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: `${styles.productImage} mt-4`, style: { marginBottom: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: `${product.name} - ${categoryName} by IMORA`,
              width: "800",
              height: "800",
              decoding: "async"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.discountBadge, children: [
            "Rs -",
            discount
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.productInfo, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.pricing, children: [
            discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("del", { className: styles.originalPrice, children: [
              "Rs ",
              price2,
              "/-"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: styles.price, children: [
              "Rs ",
              displayPrice.toFixed(2),
              "/-"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "visually-hidden", children: "Product description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: styles.description,
              dangerouslySetInnerHTML: { __html: product.description }
            }
          ),
          (care.water || care.sunlight || care.temperature) && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.careInstructions, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h3", children: "Care Instructions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
              care.water && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Water:" }),
                " ",
                care.water
              ] }),
              care.sunlight && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sunlight:" }),
                " ",
                care.sunlight
              ] }),
              care.temperature && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Temperature:" }),
                " ",
                care.temperature
              ] })
            ] })
          ] }),
          features2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: styles.features, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h3", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: features2.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: feature }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              variant: "primary",
              size: "lg",
              className: styles.addToCartBtn,
              onClick: handleAddToCart,
              children: "Add to Cart"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { show: showModal, onHide: handleContinueShopping, centered: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Title, { children: "Item Added to Cart!" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal.Body, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.image,
              alt: product.name,
              width: "60",
              height: "60",
              style: { width: "60px", height: "60px", objectFit: "cover" },
              className: "me-3"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-1", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0", children: [
              "Rs",
              displayPrice.toFixed(2),
              "/-"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal.Footer, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", onClick: handleContinueShopping, children: "Continue Shopping" }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `cart-drawer ${showCart ? "show" : ""}`, "aria-label": "Shopping cart", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-bottom d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h5 mb-0", children: "Shopping Cart" }),
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
    ] })
  ] });
};
const Show = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShowContent, { ...props }) });
export {
  Show as default
};
