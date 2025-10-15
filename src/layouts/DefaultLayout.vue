<template>
<div class="layout">
  <AppTopbar />
  <main class="main-content">
    <router-view />
  </main>
</div>
</template>

<script setup>
import AppTopbar from '../components/layout/AppTopbar.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content { flex: 1; }
</style>
