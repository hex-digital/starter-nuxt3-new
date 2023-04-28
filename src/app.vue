<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { resourceHints, stylesheets } = useWebFonts([
  // Add links to typekit or google fonts here, or remove this composable if you don't need them
  // 'https://use.typekit.net/grx7jcv.css',
  // 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
]);

useHead({
  title: 'Hex | Product and Growth Studio',
  link: [
    ...resourceHints,
    ...stylesheets,
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  htmlAttrs: { lang: 'en' },
});
</script>
