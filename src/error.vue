<template>
  <div>
    <NuxtLayout>
      <div class="o-wrapper o-wrapper--sm u-mb-48">
        <h1 class="u-font-bold u-mb-32">
          {{ error?.statusCode }} Error
        </h1>
        <p class="u-mb-32" v-html="`${error?.statusMessage}<br>Please refresh and try again.` || 'Something went wrong! Please refresh and try again.'" />
        <NuxtLink class="u-underline u-cursor-pointer" @click="handleError">
          Go to the homepage
        </NuxtLink>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const error = useError();

function handleError() {
  clearError({
    redirect: '/',
  });
}
</script>
