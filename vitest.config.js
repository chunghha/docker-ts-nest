import { defineConfig } from 'vitest/config';
import check from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    test: {
        environment: 'node',
        silent: true,
        coverage: {
            reporter: ['text', 'text-summary']
        },
        reporters: ['verbose']
    },
    plugins: [check({ typescript: true }), tsconfigPaths()]
});
