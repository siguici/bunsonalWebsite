import sitemap from '@astrojs/sitemap'
// import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind'
import qwik from '@qwikdev/astro'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  site: 'https://nduartech.github.io',
  prefetch: {
    prefetchAll: true,
  },
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  integrations: [
    qwik({
      include: '**/qwik/*',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            if (vite.build?.rollupOptions) {
              vite.build.rollupOptions.external = []
            }
          }
        },
      },
    },
    mdx(),
    sitemap(),
    robotsTxt(),
    compressor(),
  ],
})
