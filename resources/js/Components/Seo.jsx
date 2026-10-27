import { Head, usePage } from '@inertiajs/react';

const DEFAULTS = {
    siteName: 'IMORA',
    separator: ' | ',
    description: 'Discover your signature fragrance. Shop premium perfumes and deals of the day at IMORA.',
    image: '/images/imora-social.jpg', // 1200x630
    locale: 'en_US',
    twitterHandle: '',
};

const toAbsolute = (value, origin = '') => {
    if (!value) return '';
    if (/^https?:\/\//i.test(value)) return value;
    return origin + (value.startsWith('/') ? value : `/${value}`);
};

export default function Seo({
    title,
    description,
    image,
    canonical,
    type = 'website',
    keywords,
    noindex = false,
    schema, // optional JSON-LD object or array of objects
    children,
}) {
    const { url, props } = usePage(); // url = current path + query string
    const origin = props.appUrl || '';

    const fullTitle = title
        ? `${title}${DEFAULTS.separator}${DEFAULTS.siteName}`
        : DEFAULTS.siteName;
    const desc = description || DEFAULTS.description;
    const img = toAbsolute(image || DEFAULTS.image, origin);

    // Canonical defaults to the current path without query string
    const pageUrl = toAbsolute(canonical || url.split('?')[0], origin);

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta head-key="description" name="description" content={desc} />
            {keywords && (
                <meta
                    head-key="keywords"
                    name="keywords"
                    content={Array.isArray(keywords) ? keywords.join(', ') : keywords}
                />
            )}
            <meta
                head-key="robots"
                name="robots"
                content={noindex ? 'noindex, nofollow' : 'index, follow'}
            />
            <link head-key="canonical" rel="canonical" href={pageUrl} />

            {/* Open Graph */}
            <meta head-key="og:type" property="og:type" content={type} />
            <meta head-key="og:site_name" property="og:site_name" content={DEFAULTS.siteName} />
            <meta head-key="og:title" property="og:title" content={fullTitle} />
            <meta head-key="og:description" property="og:description" content={desc} />
            <meta head-key="og:url" property="og:url" content={pageUrl} />
            <meta head-key="og:locale" property="og:locale" content={DEFAULTS.locale} />
            {img && <meta head-key="og:image" property="og:image" content={img} />}

            {/* Twitter */}
            <meta
                head-key="twitter:card"
                name="twitter:card"
                content={img ? 'summary_large_image' : 'summary'}
            />
            <meta head-key="twitter:title" name="twitter:title" content={fullTitle} />
            <meta head-key="twitter:description" name="twitter:description" content={desc} />
            {img && <meta head-key="twitter:image" name="twitter:image" content={img} />}
            {DEFAULTS.twitterHandle && (
                <meta head-key="twitter:site" name="twitter:site" content={DEFAULTS.twitterHandle} />
            )}

            {/* Structured data (JSON-LD) */}
            {schema && (
                <script head-key="json-ld" type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {children}
        </Head>
    );
}