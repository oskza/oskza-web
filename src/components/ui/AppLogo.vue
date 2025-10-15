<template>
<div class="logo">
  <InternalLink routeName="home">oskza</InternalLink>
</div>
</template>

<script setup>
import InternalLink from './InternalLink.vue'
</script>

<style scoped>
.logo {
  font-family: var(--font-stack-mono);
  font-size: var(--font-lg);
  font-weight: 600;
  letter-spacing: .125rem;
}
</style>
