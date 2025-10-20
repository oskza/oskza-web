<template>
<footer v-if="isScrollable" class="footer">
  <GoTopBtn />
</footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import GoTopBtn from '../ui/GoTopBtn.vue'

const isScrollable = ref(false)

const checkScrollable = () => isScrollable.value = document.body.scrollHeight > window.innerHeight

onMounted(() => {
  checkScrollable()
  window.addEventListener('resize', checkScrollable)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScrollable)
})
</script>

<style scoped>
.footer { padding: var(--spacing-xs); }
</style>
