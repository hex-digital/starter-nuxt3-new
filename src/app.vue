<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { logger } from '~/helpers/logger';

logger.debug('test');

useHead({
  title: 'Hex | Product and Growth Studio',
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  htmlAttrs: { lang: 'en' },
});
</script>
