import { r as reactExports, j as jsxRuntimeExports, $ as $e, a as axios } from "../ssr.js";
import { u as useCart, B as Button, C as CartItems } from "./CartItems-CuhxiCeA.js";
import { M as Modal } from "./web-CkWK24Zo.js";
const allProductsHeader = "_allProductsHeader_12ln4_8";
const allProductsNav = "_allProductsNav_12ln4_22";
const styles = {
  allProductsHeader,
  allProductsNav
};
const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&#39;": "'",
  "&nbsp;": " "
};
function stripHtml(html) {
  return String(html ?? "").replace(/<[^>]*>/g, " ").replace(/&(amp|lt|gt|quot|nbsp|#0?39);/g, (m) => ENTITIES[m] ?? m).replace(/\s+/g, " ").trim();
}
const ProductCard = ({ product, showDiscount, cartVariant }) => {
  var _a, _b, _c;
  const { dispatch } = useCart();
  const [showModal, setShowModal] = reactExports.useState(false);
  const [showCart, setShowCart] = reactExports.useState(false);
  if (!product) return null;
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  const rating = Math.min(5, Math.max(0, Number(product.rating) || 0));
  const displayPrice = discount ? price - price * discount / 100 : price;
  const plainDescription = stripHtml(product.description);
  const productUrl = `/${(_a = product.category) == null ? void 0 : _a.slug}/${product.slug}`;
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
  const handleContinueShopping = () => {
    setShowModal(false);
  };
  const handleCheckout = () => {
    setShowModal(false);
    setShowCart(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pc-card", children: [
      showDiscount && discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pc-badge", children: [
        "-",
        discount,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: productUrl, className: "pc-img-wrap", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: `${product.image}`,
          alt: `${product.name}${((_b = product.category) == null ? void 0 : _b.name) ? ` - ${product.category.name}` : ""}`,
          className: "pc-img",
          width: "400",
          height: "400",
          loading: "lazy",
          decoding: "async"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pc-body", children: [
        ((_c = product.category) == null ? void 0 : _c.name) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pc-category", children: product.category.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { href: productUrl, className: "pc-link", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pc-title", children: product.name }),
          plainDescription && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pc-desc", children: plainDescription })
        ] }),
        rating > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pc-stars", "aria-label": `Rating ${rating} out of 5`, children: [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s <= rating ? "on" : "", children: "★" }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pc-price", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pc-price-new", children: [
            "Rs",
            displayPrice.toFixed(2),
            "/-"
          ] }),
          showDiscount && discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "pc-price-old", children: [
            "Rs",
            price,
            "/-"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "pc-add-btn",
            onClick: (e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart();
            },
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
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                .pc-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: #ffffff;
                    border-radius: 14px;
                    overflow: hidden;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .pc-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
                }

                .pc-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    z-index: 2;
                    background: #c29522;
                    color: #fff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    padding: 0.25rem 0.65rem;
                    border-radius: 50px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
                }

                .pc-img-wrap {
                    display: block;
                    aspect-ratio: 1 / 1;
                    overflow: hidden;
                    background: #f6f6f6;
                }

                .pc-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .pc-card:hover .pc-img {
                    transform: scale(1.06);
                }

                .pc-body {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    padding: 0.85rem 0.9rem 0.95rem;
                }

                .pc-category {
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.06em;
                    color: #9b5d24;
                    margin-bottom: 0.2rem;
                }

                .pc-link {
                    text-decoration: none;
                    color: inherit;
                }

                .pc-title {
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 1.3;
                    color: #222;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .pc-link:hover .pc-title {
                    color: #9b5d24;
                }

                .pc-desc {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.82rem;
                    line-height: 1.45;
                    color: #6b6b6b;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .pc-stars {
                    font-size: 0.9rem;
                    letter-spacing: 1px;
                    color: #d9d9d9;
                    margin-bottom: 0.4rem;
                }

                .pc-stars .on {
                    color: #f5b301;
                }

                .pc-price {
                    display: flex;
                    align-items: baseline;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: auto;
                    margin-bottom: 0.7rem;
                }

                .pc-price-new {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #9b5d24;
                }

                .pc-price-old {
                    font-size: 0.82rem;
                    color: #999;
                    text-decoration: line-through;
                }

                .pc-add-btn {
                    width: 100%;
                    border: 2px solid #c29522;
                    background: #c29522;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.85rem;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    padding: 0.55rem 0.75rem;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: background-color 0.2s ease, border-color 0.2s ease;
                }

                .pc-add-btn:hover,
                .pc-add-btn:focus-visible {
                    background: #9b5d24;
                    border-color: #9b5d24;
                }

                .pc-add-btn:active {
                    transform: scale(0.98);
                }

                /* Mobile: 2 cards per row, so tighten everything */
                @media (max-width: 575.98px) {
                    .pc-body {
                        padding: 0.65rem 0.65rem 0.75rem;
                    }
                    .pc-title {
                        font-size: 0.88rem;
                    }
                    .pc-desc {
                        display: none;
                    }
                    .pc-price-new {
                        font-size: 0.95rem;
                    }
                    .pc-add-btn {
                        font-size: 0.7rem;
                        padding: 0.45rem 0.5rem;
                    }
                    .pc-badge {
                        top: 8px;
                        left: 8px;
                        font-size: 0.68rem;
                        padding: 0.2rem 0.5rem;
                    }
                }
            ` })
  ] });
};
const ProductRow = ({ products }) => {
  if (!products || products.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center", children: "No products found." });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "row", children: products.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-6 col-md-4 col-lg-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ProductCard,
    {
      product,
      showDiscount: product.discount > 0,
      cartVariant: "primary"
    }
  ) }, product.id)) });
};
const AllProducts = () => {
  const [products, setProducts] = reactExports.useState([]);
  const [activeFilter, setActiveFilter] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const fetchProducts = async (filter = null) => {
    const url = filter ? `/getproducts?filter=${filter}` : `/getproducts`;
    setLoading(true);
    try {
      const res = await axios.get(url, {
        headers: {
          "Accept": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      setTimeout(() => {
        setProducts(res.data);
        setLoading(false);
      }, 1e3);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchProducts();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: [styles.allProducts, "container-fluid"].join(" "), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.allProductsHeader, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Our Products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.allProductsNav, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            onClick: () => {
              fetchProducts("new");
              setActiveFilter("new");
            },
            className: activeFilter === "new" ? "text-decoration-underline pb-4" : "",
            children: "New Arrivals"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            onClick: () => {
              fetchProducts("best");
              setActiveFilter("best");
            },
            className: activeFilter === "best" ? "text-decoration-underline pb-4" : "",
            children: "Best Seller"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            onClick: () => {
              fetchProducts("popular");
              setActiveFilter("popular");
            },
            className: activeFilter === "popular" ? "text-decoration-underline pb-4" : "",
            children: "Most Popular"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            onClick: () => {
              fetchProducts("");
              setActiveFilter("");
            },
            className: activeFilter === "" ? "text-decoration-underline pb-4" : "",
            children: "View All"
          }
        ) })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textAlign: "center", padding: "40px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner-border text-success", role: "status", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProductRow, { products })
  ] });
};
export {
  AllProducts as A,
  ProductCard as P,
  stripHtml as s
};
