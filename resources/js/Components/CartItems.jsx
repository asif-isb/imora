import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faUniversity, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/js/Context/CartContext';
import styles from '@/css/web/CartItems.module.css';
import { createPortal } from 'react-dom';
import axios from 'axios';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

// Add these imports
import easypaisa from '@/images/easypaisa.png';
import jazzcash from '@/images/jazzcash.png';

// Flip to true later to bring these back
const SHOW_EMAIL = false;
const ENABLE_ONLINE_PAYMENTS = false;

const CartItems = ({ onClose = () => {} }) => {
    const { items, total, dispatch } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [copiedText, setCopiedText] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [fieldErrors, setFieldErrors] = useState({});

    useEffect(() => {
        // Re-initialize totals when items change
        dispatch({ type: "INITIALIZE_TOTALS" });
    }, [dispatch]);

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity < 1) {
            dispatch({ type: "REMOVE_FROM_CART", payload: id });
            return;
        }
        dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id, quantity }
        });
    };

    const handleCheckout = () => {
        onClose(); // Close the cart drawer
        setShowCheckout(true);
    };

    const handleCancel = () => {
        setShowCheckout(false);
    };

  const handleConfirm = async () => {
        if (!items.length) {
            toast.error("Your cart is empty.");
            return;
        }

        // Get product IDs
        const productIds = items.map(item => item.id);

        // Manually extract values from form
        const form = document.querySelector('#checkout-form');
        const name = form.querySelector('input[placeholder="Name *"]').value;
        const phone = form.querySelector('input[placeholder="Phone Number *"]').value;
        const email = form.querySelector('input[placeholder="Email *"]')?.value || '';
        const address = form.querySelector('textarea[placeholder="Address *"]').value;
        const transactionId = form.querySelector('input[placeholder="Enter transaction ID"]')?.value || '';

        if (!paymentMethod) {
            toast.error("Please select a payment method.");
            return;
        }

        setIsProcessing(true);
        setFieldErrors({});

        try {
            const response = await axios.post('/orders', {
                product_ids: productIds,
                name,
                phone,
                email,
                address,
                payment_method: paymentMethod,
                transaction_id: transactionId,
            });

            const orderNumber = response.data.order_number;

            Swal.fire({
                icon: 'success',
                title: 'Order Placed',
                html: `Your order has been placed successfully.<br><strong>Order Number:</strong> ${orderNumber}`,
            });

            dispatch({ type: "CLEAR_CART" });
            setShowCheckout(false);
        } catch (error) {
            console.error("Order error:", error);
            const errors = error.response?.data?.errors;
            if (errors) {
                // Keep the first message per field
                const mapped = {};
                Object.entries(errors).forEach(([field, msgs]) => {
                    mapped[field] = msgs[0];
                });
                setFieldErrors(mapped);

                // Errors that don't belong to a visible input still go to a toast
                const inputFields = ['name', 'phone', 'email', 'address', 'transaction_id'];
                const others = Object.entries(mapped)
                    .filter(([field]) => !inputFields.includes(field))
                    .map(([, msg]) => msg);
                if (others.length) toast.error(others.join(' '));
            } else {
                toast.error(
                    error.response?.data?.message || "Something went wrong while placing the order."
                );
            }
        } finally {
            setIsProcessing(false);
        }
    };




    // Update the handleCopy function
    const handleCopy = async (text) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // For modern browsers
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    textArea.remove();
                } catch (err) {
                    console.error('Failed to copy text:', err);
                    return;
                }
            }
            // Show copied text feedback
            setCopiedText(text);
            setTimeout(() => setCopiedText(''), 3000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    // Styles for checkout drawer - Add to your CSS module
    const checkoutStyles = {
        position: 'fixed',
        top: 0,
        right: showCheckout ? 0 : '-100%',
        width: '400px',
        maxWidth: '100vw',
        height: '100vh',
        background: 'white',
        transition: 'right 0.3s ease-in-out',
        zIndex: 1060,
        boxShadow: '-2px 0 8px rgba(0,0,0,0.15)'
    };

    if (items.length === 0) {
        return (
            <div className="text-center p-4">
                <h3>Your Cart is Empty</h3>
                <p>Add some products to your cart to continue shopping.</p>
            </div>
        );
    }

    const totalQty = items.reduce((n, i) => n + i.quantity, 0);
    const savings = items.reduce((sum, i) => {
        const original = Number(i.originalPrice) || 0;
        const unit = Number(i.price) || 0;
        return Number(i.discount) > 0 && original > unit
            ? sum + (original - unit) * i.quantity
            : sum;
    }, 0);


    return (
        <>
            {isProcessing && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999
                }}>
                    <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
                        <div className={styles.cartItemsContainer}>
                <div className={`${styles.cartItems} ci-list`}>
                    {items.map((item) => {
                        const unit = Number(item.price) || 0;
                        const original = Number(item.originalPrice) || 0;
                        const hasDiscount = Number(item.discount) > 0 && original > unit;

                        return (
                            <div key={item.id} className="ci-item">
                                <img
                                    src={`${item.image}`}
                                    alt={item.name}
                                    width="80"
                                    height="80"
                                    loading="lazy"
                                    className="ci-img"
                                />

                                <div className="ci-body">
                                    <div className="ci-top">
                                        <h3 className="ci-name">{item.name}</h3>
                                        <button
                                            type="button"
                                            className="ci-remove"
                                            aria-label={`Remove ${item.name} from cart`}
                                            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <polyline points="3 6 5 6 21 6" />
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                                <path d="M10 11v6M14 11v6" />
                                                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="ci-unit">Rs {unit.toFixed(2)} each</div>

                                    <div className="ci-bottom">
                                        <div className="ci-qty" role="group" aria-label={`Quantity for ${item.name}`}>
                                            <button
                                                type="button"
                                                aria-label="Decrease quantity"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                            >
                                                −
                                            </button>
                                            <span aria-live="polite">{item.quantity}</span>
                                            <button
                                                type="button"
                                                aria-label="Increase quantity"
                                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="ci-price">
                                            {hasDiscount && (
                                                <del>Rs {(original * item.quantity).toFixed(2)}/-</del>
                                            )}
                                            <strong>Rs {(unit * item.quantity).toFixed(2)}/-</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={`${styles.cartSummary} ci-summary`}>
                    {savings > 0 && (
                        <>
                            <div className="ci-row">
                                <span>Subtotal ({totalQty} {totalQty === 1 ? 'item' : 'items'})</span>
                                <span>Rs {(total + savings).toFixed(2)}/-</span>
                            </div>
                            <div className="ci-row ci-saving">
                                <span>You save</span>
                                <span>− Rs {savings.toFixed(2)}/-</span>
                            </div>
                        </>
                    )}
                    <div className="ci-row ci-total">
                        <span>Total</span>
                        <span>Rs {total.toFixed(2)}/-</span>
                    </div>

                    <button type="button" className="ci-checkout" onClick={handleCheckout}>
                        Checkout
                    </button>
                    <button
                        type="button"
                        className="ci-clear"
                        onClick={() => dispatch({ type: "CLEAR_CART" })}
                    >
                        Clear cart
                    </button>
                </div>

                <style>{`
                    .ci-list {
                        padding: 0.75rem;
                        display: flex;
                        flex-direction: column;
                        gap: 0.75rem;
                    }

                    .ci-item {
                        display: flex;
                        gap: 0.8rem;
                        padding: 0.7rem;
                        background: #fff;
                        border: 1px solid #eee;
                        border-radius: 14px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                    }

                    .ci-img {
                        width: 80px;
                        height: 80px;
                        flex-shrink: 0;
                        object-fit: cover;
                        border-radius: 12px;
                        background: #f6f6f6;
                    }

                    .ci-body {
                        flex: 1;
                        min-width: 0;
                        display: flex;
                        flex-direction: column;
                    }

                    .ci-top {
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        gap: 0.5rem;
                    }

                    .ci-name {
                        margin: 0;
                        font-size: 0.95rem;
                        font-weight: 700;
                        line-height: 1.3;
                        color: #1b1919;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }

                    .ci-remove {
                        flex-shrink: 0;
                        width: 30px;
                        height: 30px;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        background: transparent;
                        color: #999;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background-color 0.2s ease, color 0.2s ease;
                    }
                    .ci-remove:hover,
                    .ci-remove:focus-visible {
                        background: #fdecea;
                        color: #d93025;
                    }

                    .ci-unit {
                        font-size: 0.78rem;
                        color: #8a8a8a;
                        margin: 0.1rem 0 0.5rem;
                    }

                    .ci-bottom {
                        margin-top: auto;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 0.5rem;
                    }

                    .ci-qty {
                        display: inline-flex;
                        align-items: center;
                        background: #f5f5f5;
                        border-radius: 50px;
                        padding: 2px;
                    }
                    .ci-qty button {
                        width: 32px;
                        height: 32px;
                        border: none;
                        border-radius: 50%;
                        background: #fff;
                        color: #1b1919;
                        font-size: 1.1rem;
                        line-height: 1;
                        cursor: pointer;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
                        transition: background-color 0.2s ease, color 0.2s ease;
                    }
                    .ci-qty button:hover,
                    .ci-qty button:focus-visible {
                        background: #c29522;
                        color: #fff;
                    }
                    .ci-qty span {
                        min-width: 30px;
                        text-align: center;
                        font-weight: 700;
                        font-size: 0.9rem;
                    }

                    .ci-price {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        line-height: 1.25;
                    }
                    .ci-price del {
                        font-size: 0.75rem;
                        color: #999;
                    }
                    .ci-price strong {
                        font-size: 0.98rem;
                        color: #9b5d24;
                    }

                    /* Summary */
                    .ci-summary {
                        padding: 1rem;
                        background: #fff;
                        border-top: 1px solid #eee;
                        box-shadow: 0 -4px 14px rgba(0, 0, 0, 0.06);
                    }
                    .ci-row {
                        display: flex;
                        justify-content: space-between;
                        font-size: 0.9rem;
                        color: #555;
                        margin-bottom: 0.4rem;
                    }
                    .ci-saving {
                        color: #1e8e3e;
                        font-weight: 600;
                    }
                    .ci-total {
                        font-size: 1.15rem;
                        font-weight: 700;
                        color: #1b1919;
                        padding-top: 0.6rem;
                        margin: 0.4rem 0 0.9rem;
                        border-top: 1px dashed #ddd;
                    }

                    .ci-checkout {
                        width: 100%;
                        border: 2px solid #c29522;
                        background: #c29522;
                        color: #fff;
                        font-weight: 700;
                        font-size: 0.95rem;
                        letter-spacing: 0.05em;
                        text-transform: uppercase;
                        padding: 0.8rem 1rem;
                        border-radius: 50px;
                        cursor: pointer;
                        transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
                    }
                    .ci-checkout:hover,
                    .ci-checkout:focus-visible {
                        background: #9b5d24;
                        border-color: #9b5d24;
                    }
                    .ci-checkout:active {
                        transform: scale(0.98);
                    }

                    .ci-clear {
                        display: block;
                        width: 100%;
                        margin-top: 0.6rem;
                        border: none;
                        background: transparent;
                        color: #8a8a8a;
                        font-size: 0.85rem;
                        padding: 0.4rem;
                        cursor: pointer;
                    }
                    .ci-clear:hover {
                        color: #d93025;
                        text-decoration: underline;
                    }

                    @media (max-width: 400px) {
                        .ci-img { width: 68px; height: 68px; }
                        .ci-name { font-size: 0.9rem; }
                    }
                `}</style>
            </div>

            {/* Separate Checkout Drawer */}
            {showCheckout && typeof document !== 'undefined' && createPortal(
                <>
                    <div
                        className="backdrop"
                        onClick={handleCancel}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 1055
                        }}
                    />
                    <div style={checkoutStyles}>
                        <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Checkout</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleCancel}
                                aria-label="Close"
                            />
                        </div>
                        <div className={styles.checkoutDrawerBody}>
                            <Form  id="checkout-form">
                                {/* Row 1: Name + Contact number */}
                                <div className="row g-2 mb-3">
                                    <div className="col-6">
                                        <Form.Group>
                                            <Form.Control
                                                type="text"
                                                placeholder="Name *"
                                                required
                                                isInvalid={!!fieldErrors.name}
                                                onChange={() => setFieldErrors((p) => ({ ...p, name: undefined }))}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {fieldErrors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <Form.Group>
                                            <Form.Control
                                                type="tel"
                                                inputMode="tel"
                                                maxLength={16}
                                                placeholder="Phone Number *"
                                                required
                                                isInvalid={!!fieldErrors.phone}
                                                onChange={() => setFieldErrors((p) => ({ ...p, phone: undefined }))}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {fieldErrors.phone}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>

                                {/* Row 2: Address */}
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        placeholder="Address *"
                                        required
                                        isInvalid={!!fieldErrors.address}
                                        onChange={() => setFieldErrors((p) => ({ ...p, address: undefined }))}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {fieldErrors.address}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                {SHOW_EMAIL && (
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email *"
                                            required
                                        />
                                    </Form.Group>
                                )}

                                <h6 className="mb-2">Payment Method</h6>

                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="pay-cash"
                                        checked
                                        readOnly
                                    />
                                    <label className="form-check-label" htmlFor="pay-cash">
                                        Cash on Delivery
                                    </label>
                                </div>

                                {ENABLE_ONLINE_PAYMENTS && (
                                    <>
                                        <h6 className="mb-2">Payment Methods<small className="text-muted ms-2"> (Click icon for details)</small></h6>

                                        <div className={styles.paymentMethods}>
                                            <div
                                                className={`${styles.paymentMethod} ${paymentMethod === 'easypaisa' ? styles.active : ''}`}
                                                onClick={() => setPaymentMethod('easypaisa')}
                                            >
                                                <img src={easypaisa} alt="EasyPaisa" />
                                            </div>
                                            <div
                                                className={`${styles.paymentMethod} ${paymentMethod === 'jazzcash' ? styles.active : ''}`}
                                                onClick={() => setPaymentMethod('jazzcash')}
                                            >
                                                <img src={jazzcash} alt="JazzCash" />
                                            </div>
                                            <div
                                                className={`${styles.paymentMethod} ${paymentMethod === 'bank' ? styles.active : ''}`}
                                                onClick={() => setPaymentMethod('bank')}
                                            >
                                                <FontAwesomeIcon icon={faUniversity} />
                                            </div>
                                        </div>

                                        {paymentMethod && (
                                            <div className={styles.paymentDetails}>
                                                {(paymentMethod === 'easypaisa' || paymentMethod === 'jazzcash') && (
                                                    <div className={styles.mobileNumber}>
                                                        <span>03057009093</span>
                                                        <div className={styles.copyWrapper}>
                                                            <FontAwesomeIcon
                                                                icon={faCopy}
                                                                className={styles.copyIcon}
                                                                onClick={() => handleCopy('03057009093')}
                                                            />
                                                            {copiedText === '03057009093' && (
                                                                <span className={styles.copiedText}>Copied!</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {paymentMethod === 'bank' && (
                                                    <div className={styles.bankDetails}>
                                                        <div className={styles.bankInfo}>
                                                            <span>Faysal Bank IBAN: PK07FAYS3336301000004018</span>
                                                            <div className={styles.copyWrapper}>
                                                                <FontAwesomeIcon
                                                                    icon={faCopy}
                                                                    className={styles.copyIcon}
                                                                    onClick={() => handleCopy('PK07FAYS3336301000004018')}
                                                                />
                                                                {copiedText === 'PK07FAYS3336301000004018' && (
                                                                    <span className={styles.copiedText}>Copied!</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <p className="text-danger mb-3 small">
                                            Pay your invoice and enter the transaction ID to complete your order.
                                        </p>
                                    </>
                                )}

                                <div className={`${styles.totalAmount} mb-3`}>
                                    <p className="mb-0 text-muted">Total Amount Payable:
                                    <span className="ms-2 mb-0 fw-bold text-primary">Rs {total.toFixed(2)}/-</span>
                                    </p>
                                </div>

                                {ENABLE_ONLINE_PAYMENTS && (
                                    <Form.Group className="mb-3">
                                        <Form.Label className={styles.requiredLabel}>Transaction ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter transaction ID"
                                            required
                                        />
                                    </Form.Group>
                                )}
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="outline-secondary"
                                        className="w-50"
                                        onClick={handleCancel}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="w-50"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const form = e.target.closest('form');
                                            if (form.checkValidity()) {
                                                handleConfirm();
                                            } else {
                                                form.reportValidity();
                                            }
                                        }}
                                    >
                                        Confirm
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
};

export default CartItems;
