<template>
<AppBtn class="btn-go-top" color="primary" outline :onClick="scrollToTop">
  <font-awesome-icon icon="fa-solid fa-arrow-up" />
</AppBtn>
</template>

<script setup>
import AppBtn from './AppBtn.vue'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<style scoped>
.btn-go-top { padding: var(--spacing-xs) var(--spacing-md); }
</style>
