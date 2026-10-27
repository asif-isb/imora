import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useCart } from "@/js/Context/CartContext";
import CartItems from '@/js/Components/CartItems';
import { Link } from '@inertiajs/react';
import stripHtml from "@/js/utils/stripHtml";

const ProductCard = ({ product, showDiscount, cartVariant }) => {
    const { dispatch } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [showCart, setShowCart] = useState(false);

    if (!product) return null;

    const price = Number(product.price) || 0;
    const discount = Number(product.discount) || 0;
    const rating = Math.min(5, Math.max(0, Number(product.rating) || 0));

    const displayPrice = discount ? price - (price * discount) / 100 : price;

    const plainDescription = stripHtml(product.description);

    const productUrl = `/${product.category?.slug}/${product.slug}`;

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

    return (
        <>
            <div className="pc-card">
                {/* Discount badge */}
                {showDiscount && discount > 0 && (
                    <span className="pc-badge">-{discount}%</span>
                )}

                {/* Image */}
                <Link href={productUrl} className="pc-img-wrap">
                    <img
                        src={`${product.image}`}
                        alt={`${product.name}${product.category?.name ? ` - ${product.category.name}` : ''}`}
                        className="pc-img"
                        width="400"
                        height="400"
                        loading="lazy"
                        decoding="async"
                    />
                </Link>

                {/* Body */}
                <div className="pc-body">
                    {product.category?.name && (
                        <span className="pc-category">{product.category.name}</span>
                    )}

                    <Link href={productUrl} className="pc-link">
                        <h3 className="pc-title">{product.name}</h3>
                        {plainDescription && (
                            <p className="pc-desc">{plainDescription}</p>
                        )}
                    </Link>

                    {rating > 0 && (
                        <div className="pc-stars" aria-label={`Rating ${rating} out of 5`}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s} className={s <= rating ? "on" : ""}>★</span>
                            ))}
                        </div>
                    )}

                    <div className="pc-price">
                        <span className="pc-price-new">Rs{displayPrice.toFixed(2)}/-</span>
                        {showDiscount && discount > 0 && (
                            <span className="pc-price-old">Rs{price}/-</span>
                        )}
                    </div>

                    <button
                        type="button"
                        className="pc-add-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart();
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Add to Cart Confirmation Modal */}
            <Modal show={showModal} onHide={handleContinueShopping} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Item Added to Cart!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={product.image}
                            alt={product.name}
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
            <div className={`cart-drawer ${showCart ? 'show' : ''}`}>
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Shopping Cart</h5>
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
            </div>

            <style>{`
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
            `}</style>
        </>
    );
};

export default ProductCard;