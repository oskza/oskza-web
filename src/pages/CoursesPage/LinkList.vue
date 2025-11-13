<template>
<ul class="links">
  <li>
    <a :href="courseLinks.facebook" target="_blank">
      <font-awesome-icon class="icon" icon="fab fa-facebook-square" />
      <span class="text">{{ courseLinks.facebook.split('/').pop() }}</span>
    </a>
  </li>
  <li>
    <a :href="courseLinks.instagram" target="_blank">
      <font-awesome-icon class="icon" icon="fab fa-instagram" />
      <span class="text">{{ courseLinks.instagram.split('/').pop() }}</span>
    </a>
  </li>
</ul>
</template>

<script setup>
import { courseLinks } from '../../data/links'
</script>

<style scoped>
.links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xs);
  font-size: var(--font-sm);
}

li {
  display: flex;
  justify-content: center;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3xs);
}

.icon { color: var(--primary-color); }
</style>
