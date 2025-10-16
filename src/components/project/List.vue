<template>
<div class="project-list">
  <Card v-for="project in projects" :key="project.id" :project />
</div>
</template>

<script setup>
import Card from './Card.vue'

const { projects } = defineProps({
  projects: { type: Array, required: true }
})
</script>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
</style>
