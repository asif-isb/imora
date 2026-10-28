import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

import { Button, Modal } from 'react-bootstrap';
import { useCart } from '@/js/Context/CartContext';
import Layout from '@/js/Components/Layout';
import CartProvider from '@/js/Providers/CartProvider';
import CartItems from '@/js/Components/CartItems';
import '@/css/bootstrap.css';
import '@/css/web.css';

import Seo from '@/js/Components/Seo';

const ShowContent = ({ product, seo }) => {
    const { dispatch } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [showCart, setShowCart] = useState(false);

    // Flat discount logic (Rs off, not %), with safe number conversion
    const price = Number(product.price) || 0;
    const discount = Number(product.discount) || 0;
    const displayPrice = discount > 0 ? price - (price * discount) / 100 : price;
    const saved = Math.max(0, price - displayPrice);
    const rating = Math.min(5, Math.max(0, Number(product.rating) || 0));

    const categoryName = product.category?.name || 'Fragrance';

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
    const features = product.features || [];

    // The price in structured data must match the price shown on the page
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: seo.description,
        image: [seo.image],
        url: seo.canonical,
        category: categoryName,
        brand: { '@type': 'Brand', name: 'IMORA' },
        ...(displayPrice > 0 && {
            offers: {
                '@type': 'Offer',
                price: displayPrice.toFixed(2),
                priceCurrency: 'PKR',
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/NewCondition',
                url: seo.canonical,
            },
        }),
    };

    return (
        <>
            <Seo
                title={seo.title}
                description={seo.description}
                canonical={seo.canonical}
                image={seo.image}
                type={seo.type}
                keywords={[product.name, product.category?.name, 'perfume', 'fragrance', 'IMORA'].filter(Boolean)}
                schema={schema}
            />

            <Layout>
                <article className="pd-page">
                    <nav aria-label="Breadcrumb" className="pd-breadcrumb">
                        <ol>
                            <li><Link href="/">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li>{categoryName}</li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="pd-grid">
                        <figure className="pd-gallery">
                            <div className="pd-img-wrap">
                                {/* Main image is above the fold: no lazy loading here */}
                                <img
                                    src={product.image}
                                    alt={`${product.name} - ${categoryName} by IMORA`}
                                    width="800"
                                    height="800"
                                    decoding="async"
                                    className="pd-img"
                                />
                                {discount > 0 && (
                                    <span className="pd-badge">-{discount}%</span>
                                )}
                            </div>
                        </figure>

                        <div className="pd-info">
                            <span className="pd-category">{categoryName}</span>
                            <h1 className="pd-title">{product.name}</h1>

                            {rating > 0 && (
                                <div className="pd-stars" aria-label={`Rating ${rating} out of 5`}>
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span key={s} className={s <= rating ? 'on' : ''}>★</span>
                                    ))}
                                </div>
                            )}

                            <div className="pd-price-row">
                                <span className="pd-price">Rs {displayPrice.toFixed(2)}/-</span>
                                {discount > 0 && (
                                    <>
                                        <del className="pd-old">Rs {price}/-</del>
                                        <span className="pd-save">Save Rs {Math.round(saved)}</span>
                                    </>
                                )}
                            </div>

                            <h2 className="visually-hidden">Product description</h2>
                            <div
                                className="pd-description"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            />

                            {(care.water || care.sunlight || care.temperature) && (
                                <section className="pd-card">
                                    <h2 className="pd-card-title">Care Instructions</h2>
                                    <ul className="pd-list">
                                        {care.water && <li><strong>Water:</strong> {care.water}</li>}
                                        {care.sunlight && <li><strong>Sunlight:</strong> {care.sunlight}</li>}
                                        {care.temperature && <li><strong>Temperature:</strong> {care.temperature}</li>}
                                    </ul>
                                </section>
                            )}

                            {features.length > 0 && (
                                <section className="pd-card">
                                    <h2 className="pd-card-title">Features</h2>
                                    <ul className="pd-list">
                                        {features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Desktop / tablet button */}
                            <div className="pd-actions">
                                <button type="button" className="pd-add-btn" onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Mobile sticky buy bar */}
                <div className="pd-mobile-bar">
                    <div className="pd-mobile-price">
                        <span className="pd-mobile-label">Price</span>
                        <strong>Rs {displayPrice.toFixed(2)}/-</strong>
                    </div>
                    <button type="button" className="pd-add-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>

                {/* Modal */}
                <Modal show={showModal} onHide={handleContinueShopping} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Item Added to Cart!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src={product.image}
                                alt={product.name}
                                width="60"
                                height="60"
                                style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                className="me-3"
                            />
                            <div>
                                <h6 className="mb-1">{product.name}</h6>
                                <p className="mb-0">Rs{displayPrice.toFixed(2)}/-</p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleContinueShopping}>
                            Continue Shopping
                        </Button>
                        <Button variant="primary" onClick={handleCheckout}>
                            Checkout
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Cart Drawer */}
                <div
                    className={`cart-drawer-backdrop ${showCart ? 'show' : ''}`}
                    onClick={() => setShowCart(false)}
                />
                <aside className={`cart-drawer ${showCart ? 'show' : ''}`} aria-label="Shopping cart">
                    <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                        <h2 className="h5 mb-0">Shopping Cart</h2>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowCart(false)}
                            aria-label="Close"
                        />
                    </div>
                    <div className="cart-drawer-body">
                        <CartItems onClose={() => setShowCart(false)} />
                    </div>
                </aside>

                <style>{`
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
                `}</style>
            </Layout>
        </>
    );
};

const Show = (props) => (
    <CartProvider>
        <ShowContent {...props} />
    </CartProvider>
);

export default Show;