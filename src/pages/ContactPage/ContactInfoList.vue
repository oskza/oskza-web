<template>
<ul class="contact-info-list">
  <li>
    <a :href="profile.locationMap" target="_blank">
      <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
      <span class="text">{{ $t('profile.location') }}</span>
    </a>
  </li>
  <li>
    <a :href="`mailto:${ profile.email.info }`">
      <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
      <span class="text">{{ profile.email.info }}</span>
    </a>
  </li>
  <li>
    <a :href="profile.linkedin" target="_blank">
      <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
      <span class="text">oskza</span>
    </a>
  </li>
</ul>
</template>

<script setup>
import { profile } from '../../data/profile'
</script>

<style scoped>
.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xs);
  margin: 0 auto;
  text-align: start;
}

a {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
}

.icon { color: var(--primary-color); }
</style>
