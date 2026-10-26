import { Head } from '@inertiajs/react';
import React from 'react';
import Layout from '@/js/Components/Layout';
import AllProducts from '@/js/Components/web/AllProducts';
import CartProvider from "@/js/Providers/CartProvider";

import "@/css/bootstrap.css";
import "@/css/web.css";

export default function AllProductsPage() {
    return (
        <>
            <Head title="All Products - Edenic Flora" />

            <CartProvider>
                <Layout>
                    <div className="container-fluid py-4">
                        <AllProducts />
                    </div>
                </Layout>
            </CartProvider>
        </>
    );
}
