<template>
<AppBtn class="btn-go-top" color="primary" outline :onClick="scrollToTop">
  <font-awesome-icon class="icon" icon="fa-solid fa-arrow-up" />
</AppBtn>
</template>

<script setup>
import AppBtn from './AppBtn.vue'

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<style scoped>
.btn-go-top { padding: var(--spacing-2xs) var(--spacing-md); }

html.light .btn-go-top {
  border: none;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
