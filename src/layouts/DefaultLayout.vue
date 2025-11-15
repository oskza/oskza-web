<template>
<div class="layout">
  <AppTopbar />
  <main class="main-content">
    <router-view />
  </main>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppTopbar from '../components/layout/AppTopbar.vue'

const route = useRoute()
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  min-height: 100vh;
  max-width: 1100px;
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  margin-inline: auto;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
