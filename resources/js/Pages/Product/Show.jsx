import React, { useState } from 'react';

import { Button, Modal } from 'react-bootstrap';
import { useCart } from '@/js/Context/CartContext';
import Layout from '@/js/Components/Layout';
import CartProvider from '@/js/Providers/CartProvider';
import CartItems from '@/js/Components/CartItems';
import styles from '@/css/web/PlantDetails.module.css';
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
    const displayPrice = discount > 0 ? price - discount : price;

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
                <article className={styles.plantDetails}>
                    <figure className={`${styles.productImage} mt-4`} style={{ marginBottom: 0 }}>
                        {/* Main image is above the fold: no lazy loading here */}
                        <img
                            src={product.image}
                            alt={`${product.name} - ${categoryName} by IMORA`}
                            width="800"
                            height="800"
                            decoding="async"
                        />
                        {discount > 0 && (
                            <div className={styles.discountBadge}>
                                Rs -{discount}
                            </div>
                        )}
                    </figure>

                    <div className={styles.productInfo}>
                        <h1>{product.name}</h1>
                        <div className={styles.pricing}>
                            {discount > 0 && (
                                <del className={styles.originalPrice}>
                                    Rs {price}/-
                                </del>
                            )}
                            <span className={styles.price}>
                                Rs {displayPrice.toFixed(2)}/-
                            </span>
                        </div>

                        <h2 className="visually-hidden">Product description</h2>
                        <div
                            className={styles.description}
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        />

                        {(care.water || care.sunlight || care.temperature) && (
                            <section className={styles.careInstructions}>
                                <h2 className="h3">Care Instructions</h2>
                                <ul>
                                    {care.water && <li><strong>Water:</strong> {care.water}</li>}
                                    {care.sunlight && <li><strong>Sunlight:</strong> {care.sunlight}</li>}
                                    {care.temperature && <li><strong>Temperature:</strong> {care.temperature}</li>}
                                </ul>
                            </section>
                        )}

                        {features.length > 0 && (
                            <section className={styles.features}>
                                <h2 className="h3">Features</h2>
                                <ul>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        <Button
                            type="button"
                            variant="primary"
                            size="lg"
                            className={styles.addToCartBtn}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </article>

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