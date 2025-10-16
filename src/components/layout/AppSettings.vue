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
  align-items: center;
  gap: var(--spacing-xs);
}
</style>
