<template>
<ul class="links">
  <li>
    <a :href="profile.facebook.courses">
      <font-awesome-icon class="icon" icon="fab fa-facebook-square" />
      <span class="text">{{ profile.facebook.courses.split('/').pop() }}</span>
    </a>
  </li>
  <li>
    <a :href="profile.instagram.courses">
      <font-awesome-icon class="icon" icon="fab fa-instagram" />
      <span class="text">{{ profile.instagram.courses.split('/').pop() }}</span>
    </a>
  </li>
  <!-- <li>
    <a :href="`mailto:${profile.email.courses}`">
      <font-awesome-icon class="icon" icon="fas fa-envelope" />
      <span class="text">{{ profile.email.courses }}</span>
    </a>
  </li> -->
</ul>
</template>

<script setup>
import { profile } from '../../data/profile'
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
