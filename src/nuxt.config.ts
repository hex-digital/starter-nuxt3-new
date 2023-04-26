import { plugins } from './config/nuxt/plugins';
import { postcss } from './config/nuxt/postcss';
import { runtimeConfig } from './config/nuxt/runtimeConfig';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig,

  plugins,

  postcss,
});
