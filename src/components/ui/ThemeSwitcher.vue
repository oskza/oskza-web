<template>
<AppBtn
  class="theme-switcher"
  color="plain"
  :onClick="toggleTheme"
>
  <fa-icon class="icon" :icon="isDark ? 'fas fa-moon' : 'fas fa-sun'" />
</AppBtn>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppBtn from './AppBtn.vue'

const isDark = ref(false)

const applyTheme = dark => {
  document.documentElement.classList.toggle('light', !dark)
  isDark.value = dark
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => applyTheme(!isDark.value)

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
  prefersDark.addEventListener('change', e => applyTheme(e.matches))

  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark' || storedTheme === 'light') {
    applyTheme(storedTheme === 'dark')
    return;
  }

  applyTheme(prefersDark.matches)
})
</script>

<style scoped>
.theme-switcher {
  font-size: var(--font-md);
  color: var(--accent-color);
  transition: transform 0.2s ease;
}

.theme-switcher:hover { transform: scale(1.15) rotate(10deg); }
</style>
