<template>
<ul class="contact-info-list">
  <li>
    <a :href="profileLinks.locationMap" target="_blank">
      <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
      <span class="text">{{ $t('profile.location') }}</span>
    </a>
  </li>
  <li>
    <a :href="`mailto:${ profileLinks.email }`">
      <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
      <span class="text">{{ profileLinks.email }}</span>
    </a>
  </li>
  <li>
    <a :href="profileLinks.linkedin" target="_blank">
      <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
      <span class="text">{{ profileLinks.linkedin.split('://').pop() }}</span>
    </a>
  </li>
</ul>
</template>

<script setup>
import { profileLinks } from '../../data/links'
</script>

<style scoped>
.contact-info-list {
  margin-inline: auto;;
  text-align: start;
  line-height: 1.75rem;
}

a {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.icon { color: var(--primary-color); }
</style>
