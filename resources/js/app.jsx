import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import React from 'react';

// Bootstrap's JS touches window/document on import, which crashes SSR
if (typeof window !== 'undefined') {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

const appName = import.meta.env.VITE_APP_NAME || 'IMORA';

createInertiaApp({
    title: (title) => title || 'IMORA | Discover Your Signature Fragrance',
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const app = (
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        );

        // Server-rendered HTML present -> hydrate, otherwise normal render
        if (el.hasChildNodes()) {
            hydrateRoot(el, app);
        } else {
            createRoot(el).render(app);
        }
    },
    progress: {
        color: '#4B5563',
    },
});