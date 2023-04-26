<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { logger } from '~/helpers/logger';

logger.debug('test');

useHead({
  title: 'Fiddlefig Studio | Refuse to Blend In',
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  htmlAttrs: { lang: 'en' },
});
</script>
