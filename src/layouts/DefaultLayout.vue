<template>
<div class="layout">
  <AppTopbar />
  <main class="main-content">
    <router-view />
  </main>
  <AppFooter v-if="!route.meta.hideFooter" />
</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AppTopbar from '../components/layout/AppTopbar.vue'
import AppFooter from '../components/layout/AppFooter.vue'

const route = useRoute()
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
