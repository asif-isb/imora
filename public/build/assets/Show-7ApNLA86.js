import{j as e,r as j,$ as z}from"./app-DlE-Bouv.js";import{u as M,B as w,C as R}from"./CartItems-BXc5K2B0.js";import{C as F,L as I,M as d}from"./web-eMjqj81b.js";/* empty css                  */import{S as A}from"./Seo-BiWoXqUJ.js";import"./index-BOv3ZH94.js";import"./index-DBlhKHRp.js";import"./index-Br-0C9b0.js";import"./sweetalert2.esm.all-BQIkj5Wb.js";const B=({product:a,seo:r})=>{var f,u;const{dispatch:y}=M(),[N,m]=j.useState(!1),[h,o]=j.useState(!1),t=Number(a.price)||0,n=Number(a.discount)||0,s=n>0?t-t*n/100:t,v=Math.max(0,t-s),p=Math.min(5,Math.max(0,Number(a.rating)||0)),l=((f=a.category)==null?void 0:f.name)||"Fragrance",x=()=>{y({type:"ADD_TO_CART",payload:{id:a.id,name:a.name,image:a.image,price:s,originalPrice:a.price,discount:a.discount}}),m(!0)},g=()=>m(!1),C=()=>{m(!1),o(!0)},i=a.care_instructions||{},b=a.features||[],k={"@context":"https://schema.org","@type":"Product",name:a.name,description:r.description,image:[r.image],url:r.canonical,category:l,brand:{"@type":"Brand",name:"IMORA"},...s>0&&{offers:{"@type":"Offer",price:s.toFixed(2),priceCurrency:"PKR",availability:"https://schema.org/InStock",itemCondition:"https://schema.org/NewCondition",url:r.canonical}}};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:r.title,description:r.description,canonical:r.canonical,image:r.image,type:r.type,keywords:[a.name,(u=a.category)==null?void 0:u.name,"perfume","fragrance","IMORA"].filter(Boolean),schema:k}),e.jsxs(I,{children:[e.jsxs("article",{className:"pd-page",children:[e.jsx("nav",{"aria-label":"Breadcrumb",className:"pd-breadcrumb",children:e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx(z,{href:"/",children:"Home"})}),e.jsx("li",{"aria-hidden":"true",children:"/"}),e.jsx("li",{children:l}),e.jsx("li",{"aria-hidden":"true",children:"/"}),e.jsx("li",{"aria-current":"page",children:a.name})]})}),e.jsxs("div",{className:"pd-grid",children:[e.jsx("figure",{className:"pd-gallery",children:e.jsxs("div",{className:"pd-img-wrap",children:[e.jsx("img",{src:a.image,alt:`${a.name} - ${l} by IMORA`,width:"800",height:"800",decoding:"async",className:"pd-img"}),n>0&&e.jsxs("span",{className:"pd-badge",children:["-",n,"%"]})]})}),e.jsxs("div",{className:"pd-info",children:[e.jsx("span",{className:"pd-category",children:l}),e.jsx("h1",{className:"pd-title",children:a.name}),p>0&&e.jsx("div",{className:"pd-stars","aria-label":`Rating ${p} out of 5`,children:[1,2,3,4,5].map(c=>e.jsx("span",{className:c<=p?"on":"",children:"★"},c))}),e.jsxs("div",{className:"pd-price-row",children:[e.jsxs("span",{className:"pd-price",children:["Rs ",s.toFixed(2),"/-"]}),n>0&&e.jsxs(e.Fragment,{children:[e.jsxs("del",{className:"pd-old",children:["Rs ",t,"/-"]}),e.jsxs("span",{className:"pd-save",children:["Save Rs ",Math.round(v)]})]})]}),e.jsx("h2",{className:"visually-hidden",children:"Product description"}),e.jsx("div",{className:"pd-description",dangerouslySetInnerHTML:{__html:a.description}}),(i.water||i.sunlight||i.temperature)&&e.jsxs("section",{className:"pd-card",children:[e.jsx("h2",{className:"pd-card-title",children:"Care Instructions"}),e.jsxs("ul",{className:"pd-list",children:[i.water&&e.jsxs("li",{children:[e.jsx("strong",{children:"Water:"})," ",i.water]}),i.sunlight&&e.jsxs("li",{children:[e.jsx("strong",{children:"Sunlight:"})," ",i.sunlight]}),i.temperature&&e.jsxs("li",{children:[e.jsx("strong",{children:"Temperature:"})," ",i.temperature]})]})]}),b.length>0&&e.jsxs("section",{className:"pd-card",children:[e.jsx("h2",{className:"pd-card-title",children:"Features"}),e.jsx("ul",{className:"pd-list",children:b.map((c,S)=>e.jsx("li",{children:c},S))})]}),e.jsx("div",{className:"pd-actions",children:e.jsx("button",{type:"button",className:"pd-add-btn",onClick:x,children:"Add to Cart"})})]})]})]}),e.jsxs("div",{className:"pd-mobile-bar",children:[e.jsxs("div",{className:"pd-mobile-price",children:[e.jsx("span",{className:"pd-mobile-label",children:"Price"}),e.jsxs("strong",{children:["Rs ",s.toFixed(2),"/-"]})]}),e.jsx("button",{type:"button",className:"pd-add-btn",onClick:x,children:"Add to Cart"})]}),e.jsxs(d,{show:N,onHide:g,centered:!0,children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"Item Added to Cart!"})}),e.jsx(d.Body,{children:e.jsxs("div",{className:"d-flex align-items-center mb-3",children:[e.jsx("img",{src:a.image,alt:a.name,width:"60",height:"60",style:{width:"60px",height:"60px",objectFit:"cover"},className:"me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:a.name}),e.jsxs("p",{className:"mb-0",children:["Rs",s.toFixed(2),"/-"]})]})]})}),e.jsxs(d.Footer,{children:[e.jsx(w,{variant:"secondary",onClick:g,children:"Continue Shopping"}),e.jsx(w,{variant:"primary",onClick:C,children:"Checkout"})]})]}),e.jsx("div",{className:`cart-drawer-backdrop ${h?"show":""}`,onClick:()=>o(!1)}),e.jsxs("aside",{className:`cart-drawer ${h?"show":""}`,"aria-label":"Shopping cart",children:[e.jsxs("div",{className:"p-3 border-bottom d-flex justify-content-between align-items-center",children:[e.jsx("h2",{className:"h5 mb-0",children:"Shopping Cart"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>o(!1),"aria-label":"Close"})]}),e.jsx("div",{className:"cart-drawer-body",children:e.jsx(R,{onClose:()=>o(!1)})})]}),e.jsx("style",{children:`
                    .pd-page {
                        max-width: 1140px;
                        margin: 0 auto;
                        padding: 1rem 1rem 6.5rem;
                    }

                    /* Breadcrumb */
                    .pd-breadcrumb ol {
                        list-style: none;
                        display: flex;
                        flex-wrap: wrap;
                        gap: 0.4rem;
                        margin: 0 0 1rem 0;
                        padding: 0;
                        font-size: 0.85rem;
                        color: #6b6b6b;
                    }
                    .pd-breadcrumb a {
                        color: #9b5d24;
                        text-decoration: none;
                    }
                    .pd-breadcrumb a:hover {
                        text-decoration: underline;
                    }

                    /* Layout: one column on phones, two on tablets and up */
                    .pd-grid {
                        display: grid;
                        grid-template-columns: minmax(0, 1fr);
                        gap: 1.25rem;
                    }

                    .pd-gallery {
                        position: relative;
                        margin: 0;
                    }
                    .pd-img-wrap {
                        position: relative;
                        aspect-ratio: 1 / 1;
                        overflow: hidden;
                        border-radius: 16px;
                        background: #f6f6f6;
                        border: 1px solid #eee;
                        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
                    }
                    .pd-img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.4s ease;
                    }
                    .pd-badge {
                        position: absolute;
                        top: 12px;
                        left: 12px;
                        background: #c29522;
                        color: #fff;
                        font-size: 0.8rem;
                        font-weight: 700;
                        letter-spacing: 0.03em;
                        padding: 0.3rem 0.8rem;
                        border-radius: 50px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
                    }

                    /* Info column */
                    .pd-category {
                        display: inline-block;
                        font-size: 0.75rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 0.08em;
                        color: #9b5d24;
                        margin-bottom: 0.3rem;
                    }
                    .pd-title {
                        margin: 0 0 0.5rem 0;
                        font-size: clamp(1.5rem, 5vw, 2.25rem);
                        font-weight: 700;
                        line-height: 1.2;
                        color: #1b1919;
                    }
                    .pd-stars {
                        font-size: 1rem;
                        letter-spacing: 2px;
                        color: #d9d9d9;
                        margin-bottom: 0.75rem;
                    }
                    .pd-stars .on {
                        color: #f5b301;
                    }

                    .pd-price-row {
                        display: flex;
                        align-items: baseline;
                        flex-wrap: wrap;
                        gap: 0.4rem 0.75rem;
                        margin-bottom: 1.1rem;
                        padding-bottom: 1.1rem;
                        border-bottom: 1px solid #eee;
                    }
                    .pd-price {
                        font-size: clamp(1.6rem, 6vw, 2rem);
                        font-weight: 700;
                        color: #9b5d24;
                    }
                    .pd-old {
                        font-size: 1rem;
                        color: #999;
                    }
                    .pd-save {
                        font-size: 0.8rem;
                        font-weight: 600;
                        color: #9b5d24;
                        background: #f8f1dc;
                        padding: 0.2rem 0.65rem;
                        border-radius: 50px;
                    }

                    .pd-description {
                        font-size: 1rem;
                        line-height: 1.7;
                        color: #444;
                        margin-bottom: 1.25rem;
                    }
                    .pd-description p {
                        margin: 0 0 0.75rem 0;
                    }

                    .pd-card {
                        background: #fafafa;
                        border: 1px solid #eee;
                        border-radius: 12px;
                        padding: 1rem 1.1rem;
                        margin-bottom: 1rem;
                    }
                    .pd-card-title {
                        margin: 0 0 0.5rem 0;
                        font-size: 1.05rem;
                        font-weight: 700;
                        color: #1b1919;
                    }
                    .pd-list {
                        margin: 0;
                        padding-left: 1.2rem;
                        color: #444;
                        line-height: 1.6;
                    }
                    .pd-list li::marker {
                        color: #c29522;
                    }

                    /* Buttons */
                    .pd-add-btn {
                        width: 100%;
                        border: 2px solid #c29522;
                        background: #c29522;
                        color: #fff;
                        font-weight: 700;
                        font-size: 0.95rem;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                        padding: 0.85rem 1.5rem;
                        border-radius: 50px;
                        cursor: pointer;
                        transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
                    }
                    .pd-add-btn:hover,
                    .pd-add-btn:focus-visible {
                        background: #9b5d24;
                        border-color: #9b5d24;
                    }
                    .pd-add-btn:focus-visible {
                        outline: 3px solid rgba(194, 149, 34, 0.45);
                        outline-offset: 2px;
                    }
                    .pd-add-btn:active {
                        transform: scale(0.98);
                    }

                    /* In-page button is hidden on phones, the sticky bar replaces it */
                    .pd-actions {
                        display: none;
                    }

                    /* Mobile sticky buy bar */
                    .pd-mobile-bar {
                        position: fixed;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 1000;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 1rem;
                        background: #fff;
                        border-top: 1px solid #eee;
                        box-shadow: 0 -4px 14px rgba(0, 0, 0, 0.08);
                        padding: 0.65rem 1rem calc(0.65rem + env(safe-area-inset-bottom, 0px));
                    }
                    .pd-mobile-price {
                        display: flex;
                        flex-direction: column;
                        line-height: 1.2;
                        color: #9b5d24;
                    }
                    .pd-mobile-label {
                        font-size: 0.7rem;
                        text-transform: uppercase;
                        letter-spacing: 0.06em;
                        color: #777;
                    }
                    .pd-mobile-bar .pd-add-btn {
                        width: auto;
                        flex: 1;
                        max-width: 220px;
                        padding: 0.7rem 1rem;
                    }

                    /* Tablet and up */
                    @media (min-width: 768px) {
                        .pd-page {
                            padding: 1.5rem 1.5rem 3rem;
                        }
                        .pd-grid {
                            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
                            gap: 2.5rem;
                            align-items: start;
                        }
                        .pd-gallery {
                            position: sticky;
                            top: 1rem;
                        }
                        .pd-actions {
                            display: block;
                            margin-top: 1.5rem;
                        }
                        .pd-actions .pd-add-btn {
                            max-width: 380px;
                            padding: 1rem 1.5rem;
                        }
                        .pd-mobile-bar {
                            display: none;
                        }
                    }

                    @media (hover: hover) {
                        .pd-img-wrap:hover .pd-img {
                            transform: scale(1.05);
                        }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .pd-img,
                        .pd-add-btn {
                            transition: none;
                        }
                    }
                `})]})]})},K=a=>e.jsx(F,{children:e.jsx(B,{...a})});export{K as default};
