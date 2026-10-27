import{r as l,j as e,$ as y,a as z}from"./app-rO4S-REv.js";import{u as S,B as k,C as A}from"./CartItems-Bx2ikgSt.js";import{M as m}from"./web-BzGW6m4V.js";const $="_allProductsHeader_12ln4_8",M="_allProductsNav_12ln4_22",b={allProductsHeader:$,allProductsNav:M},R={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#039;":"'","&#39;":"'","&nbsp;":" "};function H(s){return String(s??"").replace(/<[^>]*>/g," ").replace(/&(amp|lt|gt|quot|nbsp|#0?39);/g,a=>R[a]??a).replace(/\s+/g," ").trim()}const _=({product:s,showDiscount:a,cartVariant:d})=>{var w,N,v;const{dispatch:c}=S(),[h,i]=l.useState(!1),[t,n]=l.useState(!1);if(!s)return null;const o=Number(s.price)||0,r=Number(s.discount)||0,x=Math.min(5,Math.max(0,Number(s.rating)||0)),g=r?o-o*r/100:o,f=H(s.description),u=`/${(w=s.category)==null?void 0:w.slug}/${s.slug}`,C=()=>{c({type:"ADD_TO_CART",payload:{id:s.id,name:s.name,image:s.image,price:g,originalPrice:s.price,discount:s.discount}}),i(!0)},j=()=>{i(!1)},P=()=>{i(!1),n(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pc-card",children:[a&&r>0&&e.jsxs("span",{className:"pc-badge",children:["-",r,"%"]}),e.jsx(y,{href:u,className:"pc-img-wrap",children:e.jsx("img",{src:`${s.image}`,alt:`${s.name}${(N=s.category)!=null&&N.name?` - ${s.category.name}`:""}`,className:"pc-img",width:"400",height:"400",loading:"lazy",decoding:"async"})}),e.jsxs("div",{className:"pc-body",children:[((v=s.category)==null?void 0:v.name)&&e.jsx("span",{className:"pc-category",children:s.category.name}),e.jsxs(y,{href:u,className:"pc-link",children:[e.jsx("h3",{className:"pc-title",children:s.name}),f&&e.jsx("p",{className:"pc-desc",children:f})]}),x>0&&e.jsx("div",{className:"pc-stars","aria-label":`Rating ${x} out of 5`,children:[1,2,3,4,5].map(p=>e.jsx("span",{className:p<=x?"on":"",children:"★"},p))}),e.jsxs("div",{className:"pc-price",children:[e.jsxs("span",{className:"pc-price-new",children:["Rs",g.toFixed(2),"/-"]}),a&&r>0&&e.jsxs("span",{className:"pc-price-old",children:["Rs",o,"/-"]})]}),e.jsx("button",{type:"button",className:"pc-add-btn",onClick:p=>{p.preventDefault(),p.stopPropagation(),C()},children:"Add to Cart"})]})]}),e.jsxs(m,{show:h,onHide:j,centered:!0,children:[e.jsx(m.Header,{closeButton:!0,children:e.jsx(m.Title,{children:"Item Added to Cart!"})}),e.jsx(m.Body,{children:e.jsxs("div",{className:"d-flex align-items-center mb-3",children:[e.jsx("img",{src:s.image,alt:s.name,style:{width:"60px",height:"60px",objectFit:"cover"},className:"me-3"}),e.jsxs("div",{children:[e.jsx("h6",{className:"mb-1",children:s.name}),e.jsxs("p",{className:"mb-0",children:["Rs",g.toFixed(2),"/-"]})]})]})}),e.jsxs(m.Footer,{children:[e.jsx(k,{variant:"secondary",onClick:j,children:"Continue Shopping"}),e.jsx(k,{variant:"primary",onClick:P,children:"Checkout"})]})]}),e.jsx("div",{className:`cart-drawer-backdrop ${t?"show":""}`,onClick:()=>n(!1)}),e.jsxs("div",{className:`cart-drawer ${t?"show":""}`,children:[e.jsxs("div",{className:"p-3 border-bottom d-flex justify-content-between align-items-center",children:[e.jsx("h5",{className:"mb-0",children:"Shopping Cart"}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>n(!1),"aria-label":"Close"})]}),e.jsx("div",{className:"cart-drawer-body",children:e.jsx(A,{onClose:()=>n(!1)})})]}),e.jsx("style",{children:`
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
            `})]})},F=({products:s})=>!s||s.length===0?e.jsx("p",{className:"text-center",children:"No products found."}):e.jsx("div",{className:"row",children:s.map(a=>e.jsx("div",{className:"col-6 col-md-4 col-lg-2 mb-4",children:e.jsx(_,{product:a,showDiscount:a.discount>0,cartVariant:"primary"})},a.id))}),q=()=>{const[s,a]=l.useState([]),[d,c]=l.useState(""),[h,i]=l.useState(!1),t=async(n=null)=>{const o=n?`/getproducts?filter=${n}`:"/getproducts";i(!0);try{const r=await z.get(o,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});setTimeout(()=>{a(r.data),i(!1)},1e3)}catch(r){console.error("Error fetching products:",r),i(!1)}};return l.useEffect(()=>{t()},[]),e.jsxs("div",{className:[b.allProducts,"container-fluid"].join(" "),children:[e.jsxs("div",{className:b.allProductsHeader,children:[e.jsx("h3",{children:"Our Products"}),e.jsx("div",{className:b.allProductsNav,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{onClick:()=>{t("new"),c("new")},className:d==="new"?"text-decoration-underline pb-4":"",children:"New Arrivals"})}),e.jsx("li",{children:e.jsx("a",{onClick:()=>{t("best"),c("best")},className:d==="best"?"text-decoration-underline pb-4":"",children:"Best Seller"})}),e.jsx("li",{children:e.jsx("a",{onClick:()=>{t("popular"),c("popular")},className:d==="popular"?"text-decoration-underline pb-4":"",children:"Most Popular"})}),e.jsx("li",{children:e.jsx("a",{onClick:()=>{t(""),c("")},className:d===""?"text-decoration-underline pb-4":"",children:"View All"})})]})})]}),h?e.jsx("div",{style:{textAlign:"center",padding:"40px"},children:e.jsx("div",{className:"spinner-border text-success",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):e.jsx(F,{products:s})]})};export{q as A,_ as P,H as s};
