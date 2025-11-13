<template>
<ul class="social-links">
  <li v-for="link in links" :key="link.name">
    <a :href="link.url" :target="link.external ? '_blank' : null">
      <font-awesome-icon :icon="link.icon" />
    </a>
  </li>
</ul>
</template>

<script setup>
import { profileLinks } from '../../data/links'

const links = [
  {
    name: 'linkedin',
    url: profileLinks.linkedin,
    icon: 'fa-brands fa-linkedin',
    external: true
  },
  {
    name: 'github',
    url: profileLinks.github,
    icon: 'fa-brands fa-github-square',
    external: true
  },
  {
    name: 'mail',
    url: `mailto:${profileLinks.email}`,
    icon: 'fa-solid fa-envelope-square'
  },
]
</script>

<style scoped>
.social-links {
  display: flex;
  font-size: var(--font-xl);
}

a { display: flex; }
</style>
