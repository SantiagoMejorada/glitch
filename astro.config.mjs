// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com',
  output: 'static',

  build: {
    assets: 'assets'
  },

  adapter: netlify()
});