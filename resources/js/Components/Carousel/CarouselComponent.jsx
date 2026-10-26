import React, { useEffect, useRef } from "react";
import { Carousel } from "bootstrap";

export default function CarouselComponent({ slides = [] }) {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (!carouselRef.current || slides.length < 2) return;

        const carousel = new Carousel(carouselRef.current, {
            ride: "carousel",
            interval: 4000, // milliseconds between slides
            pause: false,   // keep scrolling on mouse hover; use "hover" to pause
            wrap: true,
        });

        return () => carousel.dispose();
    }, [slides.length]);

    return (
        <div
            ref={carouselRef}
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            data-bs-pause="false"
        >
            <div className="carousel-inner">
                {slides.length > 0 ? (
                    slides.map((slide, index) => (
                        <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <div className="position-relative">
                                {/* Background image */}
                                <img
                                    src={slide.image}
                                    className="d-block w-100 carousel-image"
                                    alt={slide.title}
                                />

                                {/* Gradient overlay (dark on the left where the text sits) */}
                                <div className="carousel-overlay position-absolute top-0 start-0 w-100 h-100"></div>

                                {/* Slide Text Content */}
                                <div className="carousel-caption text-start position-absolute custom-caption">
                                    <h2 className="carousel-title text-uppercase fw-bold">
                                        {slide.title}
                                    </h2>
                                    <p className="carousel-description d-none d-md-block">
                                        {slide.description}
                                    </p>
                                    {slide.button_text && (
                                        <a
                                            href={slide.button_link}
                                            className="btn fw-bold btn-custom"
                                        >
                                            {slide.button_text}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No slides available</p>
                )}
            </div>

            {/* Controls */}
            <button className="carousel-control-prev custom-carousel-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>

            {/* Inline Styles */}
            <style>{`
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
            `}</style>
        </div>
    );
}