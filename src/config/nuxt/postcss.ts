export const postcss = {
  order: 'cssnanoLast',
  plugins: {
    'postcss-mixins': {},
    'tailwindcss/nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
  },
};
