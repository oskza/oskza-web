<template>
<div class="topbar">
  <AppLogo />
  <SocialLinks />
  <AppSettings />
</div>
</template>

<script setup>
import AppLogo from '../ui/AppLogo.vue'
import SocialLinks from '../ui/SocialLinks.vue'
import AppSettings from './AppSettings.vue'
</script>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-2xs) var(--spacing-xs);
  color: var(--primary-color);
}
</style>
