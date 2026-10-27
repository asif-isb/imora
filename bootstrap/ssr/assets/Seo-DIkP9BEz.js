import { K, j as jsxRuntimeExports, L as Le } from "../ssr.js";
const DEFAULTS = {
  siteName: "IMORA",
  separator: " | ",
  description: "Discover your signature fragrance. Shop premium perfumes and deals of the day at IMORA.",
  image: "/images/imora-social.jpg",
  // 1200x630
  locale: "en_US",
  twitterHandle: ""
};
const toAbsolute = (value, origin = "") => {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return origin + (value.startsWith("/") ? value : `/${value}`);
};
function Seo({
  title,
  description,
  image,
  canonical,
  type = "website",
  keywords,
  noindex = false,
  schema,
  // optional JSON-LD object or array of objects
  children
}) {
  const { url, props } = K();
  const origin = props.appUrl || "";
  const fullTitle = title ? `${title}${DEFAULTS.separator}${DEFAULTS.siteName}` : DEFAULTS.siteName;
  const desc = description || DEFAULTS.description;
  const img = toAbsolute(image || DEFAULTS.image, origin);
  const pageUrl = toAbsolute(canonical || url.split("?")[0], origin);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Le, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "description", name: "description", content: desc }),
    keywords && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        "head-key": "keywords",
        name: "keywords",
        content: Array.isArray(keywords) ? keywords.join(", ") : keywords
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        "head-key": "robots",
        name: "robots",
        content: noindex ? "noindex, nofollow" : "index, follow"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { "head-key": "canonical", rel: "canonical", href: pageUrl }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:type", property: "og:type", content: type }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:site_name", property: "og:site_name", content: DEFAULTS.siteName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:title", property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:description", property: "og:description", content: desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:url", property: "og:url", content: pageUrl }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:locale", property: "og:locale", content: DEFAULTS.locale }),
    img && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "og:image", property: "og:image", content: img }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "meta",
      {
        "head-key": "twitter:card",
        name: "twitter:card",
        content: img ? "summary_large_image" : "summary"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "twitter:title", name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "twitter:description", name: "twitter:description", content: desc }),
    img && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { "head-key": "twitter:image", name: "twitter:image", content: img }),
    DEFAULTS.twitterHandle,
    schema && /* @__PURE__ */ jsxRuntimeExports.jsx("script", { "head-key": "json-ld", type: "application/ld+json", children: JSON.stringify(schema) }),
    children
  ] });
}
export {
  Seo as S
};
