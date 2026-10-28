const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/bootstrap.esm-DjecD92b.js","assets/web-eMjqj81b.js","assets/app-DlE-Bouv.js","assets/CartItems-BXc5K2B0.js","assets/index-BOv3ZH94.js","assets/index-DBlhKHRp.js","assets/index-Br-0C9b0.js","assets/sweetalert2.esm.all-BQIkj5Wb.js","assets/CartItems-BJ5BlMNE.css","assets/web-DJCLhRF8.css"])))=>i.map(i=>d[i]);
import{r as m,_ as N,j as r,R as d,a as z,$ as O,K as P}from"./app-DlE-Bouv.js";import{R as C,C as _,L as k}from"./web-eMjqj81b.js";/* empty css                  */import{s as S,P as L,A as E}from"./AllProducts-BgYrybPp.js";import{h as D}from"./CartItems-BXc5K2B0.js";import{S as R}from"./Seo-BiWoXqUJ.js";import"./index-DBlhKHRp.js";import"./index-BOv3ZH94.js";import"./index-Br-0C9b0.js";import"./sweetalert2.esm.all-BQIkj5Wb.js";function M({slides:t=[]}){const a=m.useRef(null);return m.useEffect(()=>{if(!a.current||t.length<2)return;let e,s=!1;return N(async()=>{const{Carousel:i}=await import("./bootstrap.esm-DjecD92b.js");return{Carousel:i}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(({Carousel:i})=>{s||!a.current||(e=new i(a.current,{ride:"carousel",interval:4e3,pause:!1,wrap:!0}))}),()=>{s=!0,e==null||e.dispose()}},[t.length]),r.jsxs("div",{ref:a,id:"carouselExample",className:"carousel slide","data-bs-ride":"carousel","data-bs-interval":"4000","data-bs-pause":"false",children:[r.jsx("div",{className:"carousel-inner",children:t.length>0?t.map((e,s)=>r.jsx("div",{className:`carousel-item ${s===0?"active":""}`,children:r.jsxs("div",{className:"position-relative",children:[r.jsx("img",{src:e.image,className:"d-block w-100 carousel-image",alt:e.title}),r.jsx("div",{className:"carousel-overlay position-absolute top-0 start-0 w-100 h-100"}),r.jsxs("div",{className:"carousel-caption text-start position-absolute custom-caption",children:[r.jsx("h2",{className:"carousel-title text-uppercase fw-bold",children:e.title}),r.jsx("p",{className:"carousel-description d-none d-md-block",children:e.description}),e.button_text&&r.jsx("a",{href:e.button_link,className:"btn fw-bold btn-custom",children:e.button_text})]})]})},e.id)):r.jsx("p",{className:"text-center",children:"No slides available"})}),r.jsx("button",{className:"carousel-control-prev custom-carousel-btn",type:"button","data-bs-target":"#carouselExample","data-bs-slide":"prev",children:r.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"})}),r.jsx("button",{className:"carousel-control-next custom-carousel-btn",type:"button","data-bs-target":"#carouselExample","data-bs-slide":"next",children:r.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"})}),r.jsx("style",{children:`
                .carousel-image {
                    filter: brightness(0.85);
                }

                .carousel-overlay {
                    background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.65) 0%,
                        rgba(0, 0, 0, 0.3) 50%,
                        rgba(0, 0, 0, 0) 100%
                    );
                    z-index: 1;
                }

                /* Caption position: vertically centered, left aligned */
                .carousel-caption.custom-caption {
                    top: 50%;
                    bottom: auto;
                    transform: translateY(-50%);
                    left: 8%;
                    right: 8%;
                    max-width: 620px;
                    padding: 0;
                    z-index: 2;
                }

                /* Title: white with a gold accent bar underneath */
                .carousel-title {
                    font-size: 2.75rem;
                    line-height: 1.15;
                    letter-spacing: 0.04em;
                    color: #ffffff;
                    margin: 0 0 1rem 0;
                    padding-bottom: 0.75rem;
                    position: relative;
                    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
                }

                .carousel-title::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 70px;
                    height: 4px;
                    border-radius: 2px;
                    background-color: #c29522;
                }

                /* Description */
                .carousel-description {
                    font-size: 1.15rem;
                    line-height: 1.6;
                    color: #f1f1f1;
                    max-width: 520px;
                    margin: 0 0 1.5rem 0;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
                }

                /* Button: brand gold, hover brown */
                .btn-custom {
                    background-color: #c29522;
                    border: 2px solid #c29522;
                    color: #ffffff;
                    padding: 0.6rem 1.75rem;
                    font-size: 0.95rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    border-radius: 50px;
                    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }

                .btn-custom:hover,
                .btn-custom:focus {
                    background-color: #9b5d24;
                    border-color: #9b5d24;
                    color: #ffffff;
                    transform: translateY(-2px);
                }

                /* Mobile */
                @media (max-width: 767.98px) {
                    .carousel-caption.custom-caption {
                        left: 6%;
                        right: 6%;
                    }

                    .carousel-title {
                        font-size: 1.15rem;
                        margin-bottom: 0.6rem;
                        padding-bottom: 0.5rem;
                    }

                    .carousel-title::after {
                        width: 45px;
                        height: 3px;
                    }

                    .btn-custom {
                        font-size: 0.7rem;
                        padding: 0.4rem 1rem;
                    }
                }
            `})]})}function V({slides:t,topDiscountedProducts:a}){return r.jsxs("div",{className:"my-4",children:[r.jsxs("div",{className:"row",children:[r.jsx("div",{className:"col-md-9 mb-3 mb-md-0",children:r.jsx(M,{slides:t})}),r.jsx("div",{className:"col-md-3 d-flex flex-column gap-2",children:a.map(e=>{var n;const s=Number(e.discount)||0,i=Number(e.price)||0,o=i-i*s/100,l=S(e.description).substring(0,80);return r.jsxs("a",{href:`/${(n=e.category)==null?void 0:n.slug}/${e.slug}`,className:"offer-card",children:[r.jsx("img",{src:`${e.image}`,alt:e.name,className:"offer-card-img"}),s>0&&r.jsxs("span",{className:"offer-card-badge",children:[s,"% OFF"]}),r.jsxs("div",{className:"offer-card-content",children:[r.jsx("h5",{className:"offer-card-title",children:e.name}),l&&r.jsx("p",{className:"offer-card-desc",children:l}),r.jsxs("div",{className:"offer-card-price",children:[s>0&&r.jsxs("span",{className:"offer-card-old",children:["Rs",i]}),r.jsxs("span",{className:"offer-card-new",children:["Rs",o.toFixed(2)]})]})]})]},e.id)})})]}),r.jsx("style",{children:`
                .offer-card {
                    position: relative;
                    display: block;
                    width: 100%;
                    aspect-ratio: 16 / 9;
                    border-radius: 12px;
                    overflow: hidden;
                    text-decoration: none;
                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .offer-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.28);
                }

                .offer-card-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }

                .offer-card:hover .offer-card-img {
                    transform: scale(1.07);
                }

                /* Dark gradient so text is readable on any image */
                .offer-card::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.85) 0%,
                        rgba(0, 0, 0, 0.45) 45%,
                        rgba(0, 0, 0, 0) 75%
                    );
                    z-index: 1;
                }

                .offer-card-badge {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    z-index: 3;
                    background-color: #c29522;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    padding: 0.25rem 0.7rem;
                    border-radius: 50px;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                }

                .offer-card-content {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 2;
                    padding: 0.7rem 0.85rem;
                }

                .offer-card-title {
                    margin: 0 0 0.15rem 0;
                    font-size: 1rem;
                    font-weight: 700;
                    line-height: 1.2;
                    color: #ffffff;
                    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .offer-card-desc {
                    margin: 0 0 0.3rem 0;
                    font-size: 0.75rem;
                    line-height: 1.35;
                    color: #e6e6e6;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .offer-card-price {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                }

                .offer-card-old {
                    font-size: 0.75rem;
                    color: #cfcfcf;
                    text-decoration: line-through;
                }

                .offer-card-new {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #f0c75e;
                }

                /* Large tiles on desktop so three tiles match the carousel height */
                @media (min-width: 768px) {
                    .offer-card {
                        aspect-ratio: 2 / 1;
                    }
                }
            `})]})}var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=d.createContext&&d.createContext(b),B=["attr","size","title"];function H(t,a){if(t==null)return{};var e=$(t,a),s,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)s=o[i],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(e[s]=t[s])}return e}function $(t,a){if(t==null)return{};var e={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(a.indexOf(s)>=0)continue;e[s]=t[s]}return e}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},u.apply(this,arguments)}function g(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,s)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?g(Object(e),!0).forEach(function(s){I(t,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))})}return t}function I(t,a,e){return a=A(a),a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function A(t){var a=F(t,"string");return typeof a=="symbol"?a:a+""}function F(t,a){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var s=e.call(t,a);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function v(t){return t&&t.map((a,e)=>d.createElement(a.tag,p({key:e},a.attr),v(a.child)))}function f(t){return a=>d.createElement(W,u({attr:p({},t.attr)},a),v(t.child))}function W(t){var a=e=>{var{attr:s,size:i,title:o}=t,l=H(t,B),n=i||e.size||"1em",c;return e.className&&(c=e.className),t.className&&(c=(c?c+" ":"")+t.className),d.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,s,l,{className:c,style:p(p({color:t.color||e.color},e.style),t.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),o&&d.createElement("title",null,o),t.children)};return x!==void 0?d.createElement(x.Consumer,null,e=>a(e)):a(b)}function T(t){return f({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"},child:[]}]})(t)}function Y(t){return f({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(t)}function K(t){return f({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"},child:[]}]})(t)}function U(t){return f({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function G(t){return f({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"},child:[]}]})(t)}const q="_servicesBar_kd7co_3",J="_serviceBox_kd7co_9",Q="_iconWrapper_kd7co_42",h={servicesBar:q,serviceBox:J,iconWrapper:Q};function X(){const t=[{icon:r.jsx(U,{size:30}),title:"Services",desc:"Home Delivery"},{icon:r.jsx(K,{size:30}),title:"24/7 Support",desc:"Dedicated support"},{icon:r.jsx(G,{size:30}),title:"Return Policy",desc:"Full Replacement"},{icon:r.jsx(Y,{size:30}),title:"Customer Care",desc:"Helping you 24/7"},{icon:r.jsx(T,{size:30}),title:"On Site Visits",desc:"Schedule Visit"}];return r.jsx("div",{className:`${h.servicesBar} container-fluid py-4`,children:r.jsx(C,{className:"g-3 justify-content-center text-center",children:t.map((a,e)=>r.jsx(D,{xs:12,sm:6,md:4,lg:!0,className:"d-flex justify-content-center",children:r.jsxs("div",{className:`${h.serviceBox} p-3 w-100`,children:[r.jsx("div",{className:`${h.iconWrapper} mb-2`,children:a.icon}),r.jsx("h6",{className:"fw-bold mb-1",children:a.title}),r.jsx("p",{className:"text-muted small mb-0",children:a.desc})]})},e))})})}function Z(){const[t,a]=m.useState([]),[e,s]=m.useState({hours:0,minutes:0,seconds:0});return m.useEffect(()=>{z.get("/api/deals/latest").then(i=>{a(i.data)})},[]),m.useEffect(()=>{const i=()=>{const l=new Date,n=new Date;n.setHours(6,0,0,0),l.getHours()>=6&&n.setDate(n.getDate()+1);const c=n-l,j=String(Math.floor(c/(1e3*60*60))).padStart(2,"0"),w=String(Math.floor(c%(1e3*60*60)/(1e3*60))).padStart(2,"0"),y=String(Math.floor(c%(1e3*60)/1e3)).padStart(2,"0");s({hours:j,minutes:w,seconds:y})};i();const o=setInterval(i,1e3);return()=>clearInterval(o)},[]),r.jsxs("section",{className:"deals-section container-fluid mt-4",children:[r.jsxs("div",{className:"deals-header",children:[r.jsxs("div",{className:"deals-heading",children:[r.jsx("h2",{className:"deals-title",children:"Deals of the Day"}),r.jsxs("div",{className:"deals-timer",children:[r.jsx("span",{className:"deals-timer-label",children:"Ends in"}),r.jsxs("div",{className:"deals-timer-boxes",children:[r.jsxs("span",{className:"deals-box",children:[e.hours,r.jsx("small",{children:"hrs"})]}),r.jsx("span",{className:"deals-colon",children:":"}),r.jsxs("span",{className:"deals-box",children:[e.minutes,r.jsx("small",{children:"min"})]}),r.jsx("span",{className:"deals-colon",children:":"}),r.jsxs("span",{className:"deals-box",children:[e.seconds,r.jsx("small",{children:"sec"})]})]})]})]}),r.jsxs(O,{href:"/products-list",className:"deals-viewall",children:["View All ",r.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),r.jsx("div",{className:"row g-2 g-md-3",children:t&&t.length>0&&t.map(i=>r.jsx("div",{className:"col-6 col-md-4 col-lg-3",children:r.jsx(L,{product:i,showDiscount:i.discount>0,cartVariant:"success"})},i.id))}),r.jsx("style",{children:`
                .deals-header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                    padding-bottom: 0.9rem;
                    border-bottom: 2px solid #f0e6cc;
                    position: relative;
                }

                .deals-header::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 90px;
                    height: 2px;
                    background: #c29522;
                }

                .deals-heading {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .deals-title {
                    margin: 0;
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: #222;
                }

                .deals-timer {
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                }

                .deals-timer-label {
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: #777;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .deals-timer-boxes {
                    display: flex;
                    align-items: center;
                    gap: 0.3rem;
                }

                .deals-box {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 46px;
                    padding: 0.25rem 0.4rem;
                    background: #c29522;
                    color: #fff;
                    font-size: 1.05rem;
                    font-weight: 700;
                    line-height: 1.1;
                    border-radius: 8px;
                    font-variant-numeric: tabular-nums;
                }

                .deals-box small {
                    font-size: 0.55rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    opacity: 0.85;
                }

                .deals-colon {
                    font-weight: 700;
                    color: #9b5d24;
                }

                .deals-viewall {
                    display: inline-block;
                    padding: 0.4rem 1.1rem;
                    border: 2px solid #c29522;
                    border-radius: 50px;
                    color: #9b5d24;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-decoration: none;
                    transition: background-color 0.2s ease, color 0.2s ease;
                }

                .deals-viewall:hover {
                    background: #c29522;
                    color: #fff;
                }

                @media (min-width: 768px) {
                    .deals-header {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .deals-heading {
                        flex-direction: row;
                        gap: 1.25rem;
                    }
                    .deals-title {
                        font-size: 1.75rem;
                    }
                }

                @media (max-width: 575.98px) {
                    .deals-title {
                        font-size: 1.25rem;
                    }
                    .deals-box {
                        min-width: 40px;
                        font-size: 0.95rem;
                    }
                }
            `})]})}function de({slides:t,topDiscountedProducts:a}){const{appUrl:e=""}=P().props,s={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":`${e}/#organization`,name:"IMORA",legalName:"IMORA (PVT) Limited",url:e,logo:`${e}/images/logo.png`},{"@type":"WebSite","@id":`${e}/#website`,url:e,name:"IMORA",description:"Premium perfumes and luxury fragrances online.",inLanguage:"en",publisher:{"@id":`${e}/#organization`}},{"@type":"WebPage","@id":`${e}/#webpage`,url:e,name:"Premium Perfumes & Luxury Fragrances Online | IMORA",isPartOf:{"@id":`${e}/#website`},about:{"@id":`${e}/#organization`},inLanguage:"en"}]};return r.jsxs(r.Fragment,{children:[r.jsx(R,{title:"Premium Products",description:"Shop premium perfumes, luxury fragrances and perfume oils at IMORA. Discover best sellers, exclusive deals of the day and top discounted scents.",keywords:["perfume","fragrance","luxury fragrance","buy perfume online","perfume oil","best selling perfumes","perfume deals","IMORA"],type:"website",schema:s}),r.jsx(_,{children:r.jsxs(k,{children:[r.jsx(V,{slides:t,topDiscountedProducts:a}),r.jsx(X,{}),r.jsx(Z,{}),r.jsx(E,{})]})})]})}export{de as default};
