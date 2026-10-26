import React, { useEffect, useState } from "react";
import { Link } from '@inertiajs/react';
import axios from "axios";
import ProductCard from "@/js/Components/web/ProductCard";

export default function Dealsoftheday() {
    const [products, setProducts] = useState([]);
    const [countdown, setCountdown] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        axios.get("/api/deals/latest").then(res => {
            //console.log("Fetched products:", res.data);
            setProducts(res.data);
        });
    }, []);

    useEffect(() => {
        const calculateCountdown = () => {
            const now = new Date();
            const nextReset = new Date();
            nextReset.setHours(6, 0, 0, 0);
            if (now.getHours() >= 6) {
                nextReset.setDate(nextReset.getDate() + 1);
            }
            const diff = nextReset - now;
            const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
            setCountdown({ hours, minutes, seconds });
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="deals-section container-fluid mt-4">
            <div className="deals-header">
                <div className="deals-heading">
                    <h2 className="deals-title">Deals of the Day</h2>
                    <div className="deals-timer">
                        <span className="deals-timer-label">Ends in</span>
                        <div className="deals-timer-boxes">
                            <span className="deals-box">{countdown.hours}<small>hrs</small></span>
                            <span className="deals-colon">:</span>
                            <span className="deals-box">{countdown.minutes}<small>min</small></span>
                            <span className="deals-colon">:</span>
                            <span className="deals-box">{countdown.seconds}<small>sec</small></span>
                        </div>
                    </div>
                </div>

                <Link href="/products-list" className="deals-viewall">
                    View All <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>

            <div className="row g-2 g-md-3">
                {products && products.length > 0 && products.map(product => (
                    <div key={product.id} className="col-6 col-md-4 col-lg-3">
                        <ProductCard
                            product={product}
                            showDiscount={product.discount > 0}
                            cartVariant="success"
                        />
                    </div>
                ))}
            </div>

            <style>{`
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
            `}</style>
        </section>
    );
}