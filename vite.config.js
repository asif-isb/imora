import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/tailwind.css',
                'resources/css/bootstrap.css',
                'resources/css/web.css',
                'resources/js/app.jsx',
            ],
            refresh: true,
            detectTls: 'imora-dev.test',
        }),
        react(),
    ],
    resolve: {
        alias: {
          '@': '/resources/', // Ensure this alias points to the correct directory
        },
      },
});
