import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: process.env.SITE_URL || 'https://sraule.github.io',
  base: process.env.BASE_PATH || '/',
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
