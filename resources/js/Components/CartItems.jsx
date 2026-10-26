import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faUniversity, faCopy } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '@/js/Context/CartContext';
import styles from '@/css/web/CartItems.module.css';

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
                <div className={styles.cartItems}>

                    {items.map((item) => (
                        <div key={item.id} className="cart-item d-flex align-items-center p-3 border-bottom">
                            <img
                                src={`${item.image}`}
                                alt={item.name}
                                className="cart-item-image me-3 rounded-circle"
                                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            />
                            <div className="flex-grow-1">
                                <h5 className="mb-1">{item.name}</h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="quantity-controls d-flex align-items-center">
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </Button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <Button
                                            variant="outline-secondary"
                                            size="sm"
                                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <div className="price-section">
                                        {item.discount > 0 && (
                                            <span className="text-decoration-line-through text-muted">
                                                Rs {(item.originalPrice * item.quantity).toFixed(2)}/-
                                            </span>
                                        )}
                                        <br />
                                        <span className="fw-bold">Rs {(item.price * item.quantity).toFixed(2)}/-</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="danger"
                                size="sm"
                                className="ms-3"
                                onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                            >
                                ×
                            </Button>
                        </div>
                    ))}
                </div>

                <div className={styles.cartSummary}>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="mb-0">Total:</h4>
                        <h4 className="mb-0">Rs {total.toFixed(2)}/-</h4>
                    </div>
                    <div className="d-flex gap-2">
                        <Button
                            variant="outline-secondary"
                            className="w-50"
                            onClick={() => dispatch({ type: "CLEAR_CART" })}
                        >
                            Clear Cart
                        </Button>
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-50"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Separate Checkout Drawer */}
            {showCheckout && (
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
                </>
            )}
        </>
    );
};

export default CartItems;
