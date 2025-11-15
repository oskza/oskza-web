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
  font-size: var(--font-sm);
  line-height: 1.5rem;
}

.icon {
  color: var(--primary-color);
  margin-inline-end: var(--spacing-xs);
}
</style>
