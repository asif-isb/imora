import React from 'react';
import { usePage } from '@inertiajs/react';
import Layout from '../components/Layout';

import "../../css/bootstrap.css";
import "../../css/web.css";

import TwoColumnLayout from '@/js/Components/TwoColumnLayout';
import ServicesBar from '@/js/Components/web/ServicesBar';
import DealsOfTheDay from '@/js/Components/web/DealsOfTheDay';
import AllProducts from '@/js/Components/web/AllProducts';

import CartProvider from "@/js/Providers/CartProvider";
import Seo from '@/js/Components/Seo';

export default function Welcome({ slides, topDiscountedProducts }) {
    const { appUrl = '' } = usePage().props;

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${appUrl}/#organization`,
                name: 'IMORA',
                legalName: 'IMORA (PVT) Limited',
                url: appUrl,
                logo: `${appUrl}/images/logo.png`, // use your real logo path
                // sameAs: ['https://www.facebook.com/yourpage', 'https://www.instagram.com/yourpage'],
            },
            {
                '@type': 'WebSite',
                '@id': `${appUrl}/#website`,
                url: appUrl,
                name: 'IMORA',
                description: 'Premium perfumes and luxury fragrances online.',
                inLanguage: 'en',
                publisher: { '@id': `${appUrl}/#organization` },
            },
            {
                '@type': 'WebPage',
                '@id': `${appUrl}/#webpage`,
                url: appUrl,
                name: 'Premium Perfumes & Luxury Fragrances Online | IMORA',
                isPartOf: { '@id': `${appUrl}/#website` },
                about: { '@id': `${appUrl}/#organization` },
                inLanguage: 'en',
            },
        ],
    };

    return (
        <>
            <Seo
                title="Premium Products"
                description="Shop premium perfumes, luxury fragrances and perfume oils at IMORA. Discover best sellers, exclusive deals of the day and top discounted scents."
                keywords={[
                    'perfume',
                    'fragrance',
                    'luxury fragrance',
                    'buy perfume online',
                    'perfume oil',
                    'best selling perfumes',
                    'perfume deals',
                    'IMORA',
                ]}
                type="website"
                schema={schema}
            />

            <CartProvider>
                <Layout>
                    <TwoColumnLayout
                        slides={slides}
                        topDiscountedProducts={topDiscountedProducts}
                    />

                    <ServicesBar />
                    <DealsOfTheDay />
                    <AllProducts />
                </Layout>
            </CartProvider>
        </>
    );
}