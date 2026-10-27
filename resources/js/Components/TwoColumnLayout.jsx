import React from "react";
import CarouselComponent from "@/js/Components/Carousel/CarouselComponent";
import stripHtml from "@/js/utils/stripHtml";

export default function TwoColumnLayout({ slides, topDiscountedProducts }) {
    return (
        <div className="my-4">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-9 mb-3 mb-md-0">
                    <CarouselComponent slides={slides} />
                </div>

                {/* Right Column */}
                <div className="col-md-3 d-flex flex-column gap-2">
                    {topDiscountedProducts.map((product) => {
                        const discount = Number(product.discount) || 0;
                        const price = Number(product.price) || 0;
                        const finalPrice = price - (price * discount) / 100;
                        const description = stripHtml(product.description).substring(0, 80);

                        return (
                            <a
                                key={product.id}
                                href={`/${product.category?.slug}/${product.slug}`}
                                className="offer-card"
                            >
                                <img
                                    src={`${product.image}`}
                                    alt={product.name}
                                    className="offer-card-img"
                                />

                                {discount > 0 && (
                                    <span className="offer-card-badge">{discount}% OFF</span>
                                )}

                                <div className="offer-card-content">
                                    <h5 className="offer-card-title">{product.name}</h5>
                                    {description && (
                                        <p className="offer-card-desc">{description}</p>
                                    )}
                                    <div className="offer-card-price">
                                        {discount > 0 && (
                                            <span className="offer-card-old">Rs{price}</span>
                                        )}
                                        <span className="offer-card-new">
                                            Rs{finalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>

            <style>{`
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
            `}</style>
        </div>
    );
}