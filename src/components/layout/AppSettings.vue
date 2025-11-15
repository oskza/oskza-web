<template>
<div class="settings">
  <ThemeSwitcher />
  <LocaleSelector />
</div>
</template>

<script setup>
import ThemeSwitcher from '../ui/ThemeSwitcher.vue'
import LocaleSelector from '../ui/LocaleSelector.vue'
</script>

<style scoped>
.settings {
  display: flex;
  gap: var(--spacing-xs);
  color: var(--muted-text-color);
}
</style>
