import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '@/css/web/AllProducts.module.css';
import ProductRow from './ProductRow';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchProducts = async (filter = null) => {
    const url = filter ? `/getproducts?filter=${filter}` : `/getproducts`;

        setLoading(true); // Show loader

        try {
            const res = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        });

            // ⏳ Simulate 3-second delay before updating UI
            setTimeout(() => {
                setProducts(res.data);
                setLoading(false); // Hide loader after delay
            }, 1000);
        } catch (err) {
            console.error('Error fetching products:', err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className={[styles.allProducts, 'container-fluid'].join(' ')}>
            <div className={styles.allProductsHeader}>
                <h3>Our Products</h3>
                <div className={styles.allProductsNav}>
                    <ul>
                        <li>
                            <a
                                onClick={() => {
                                    fetchProducts('new');
                                    setActiveFilter('new');
                                }}
                                className={activeFilter === 'new' ? 'text-decoration-underline pb-4' : ''}
                            >
                                New Arrivals
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    fetchProducts('best');
                                    setActiveFilter('best');
                                }}
                                className={activeFilter === 'best' ? 'text-decoration-underline pb-4' : ''}
                            >
                                Best Seller
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    fetchProducts('popular');
                                    setActiveFilter('popular');
                                }}
                                className={activeFilter === 'popular' ? 'text-decoration-underline pb-4' : ''}
                            >
                                Most Popular
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => {
                                    fetchProducts('');
                                    setActiveFilter('');
                                }}
                                className={activeFilter === '' ? 'text-decoration-underline pb-4' : ''}
                            >
                                View All
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Show spinner or ProductRow */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <ProductRow products={products} />
            )}
        </div>
    );
};

export default AllProducts;
