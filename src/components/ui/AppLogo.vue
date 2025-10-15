<template>
<div class="logo">
  <router-link :to="{ name: 'home' }">oskza</router-link>
</div>
</template>

<style scoped>
.logo {
  font-family: var(--title-font-stack);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .15rem;
}
</style>
