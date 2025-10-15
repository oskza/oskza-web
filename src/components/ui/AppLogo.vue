<template>
<div class="logo">
  <router-link :to="{ name: 'home' }">oskza</router-link>
</div>
</template>

<style scoped>
.logo {
  font-family: var(--font-stack-mono);
  font-size: var(--font-lg);
  font-weight: 600;
  letter-spacing: .125rem;
}
</style>
