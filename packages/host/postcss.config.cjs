module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,svelte,astro,md,mdx}'],
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-sort-media-queries': {
      sort: 'desktop-first',
    },
  },
}
