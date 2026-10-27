import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/js/Components/Layout';
import CartProvider from '@/js/Providers/CartProvider';
import Seo from '@/js/Components/Seo';
import '@/css/bootstrap.css';
import '@/css/web.css';

const messages = {
    403: { title: 'Access denied', text: 'You do not have permission to view this page.' },
    404: { title: 'Page not found', text: 'The page you are looking for does not exist or has moved.' },
    500: { title: 'Server error', text: 'Something went wrong on our side. Please try again shortly.' },
    503: { title: 'Back soon', text: 'We are doing some maintenance. Please check back shortly.' },
};

export default function Error({ status = 404 }) {
    const { title, text } = messages[status] || messages[404];

    return (
        <CartProvider>
            <Seo title={`${status} - ${title}`} noindex />
            <Layout>
                <section className="text-center py-5 my-5">
                    <p className="display-4 fw-bold mb-2">{status}</p>
                    <h1 className="h3 mb-3">{title}</h1>
                    <p className="mb-4">{text}</p>
                    <Link href="/" className="btn btn-custom">Back to home</Link>
                </section>
            </Layout>
        </CartProvider>
    );
}