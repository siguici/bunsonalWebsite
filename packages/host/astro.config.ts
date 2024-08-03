import qwik from '@qwikdev/astro'
import { defineConfig } from 'astro/config'
// import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import solidJs from '@astrojs/solid-js'
import compressor from 'astro-compressor'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

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
    svelte({
      include: '**/svelte/*',
    }),
    solidJs({
      include: '**/solid/*',
    }),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            if (vite.build?.rollupOptions) {
              vite.build.rollupOptions.external = [
                'software-eng',
                'interests',
                'solid-js',
              ]
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
