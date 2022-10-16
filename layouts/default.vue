<template>
<div>
  <Navbar />
  <slot />
</div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
