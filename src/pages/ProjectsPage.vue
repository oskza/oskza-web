<template>
<div class="projects-page">
  <h2 class="page-title">{{ $t('projectsPage.pageTitle') }}</h2>
  <div class="page-content">
    <List :projects="filteredProjects" />
  </div>
</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import List from '../components/project/List.vue'
import { projects as allProjects } from '../data/projects'

const route = useRoute()

const toArray = val => (val ? (Array.isArray(val) ? val : [val]) : [])

const filteredProjects = computed(() => {
  const { type, category, tech } = route.query
  const categories = toArray(category)
  const stack = toArray(tech)

  return allProjects.filter(project => {
    if (type && project.type !== type)
      return false
    if (categories.length && !categories.every(cat => project.categories.includes(cat)))
      return false
    if (stack.length && !stack.every(tech => project.stack.includes(tech)))
      return false
    return true
  });
})
</script>

<style scoped>
.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding: 0 var(--spacing-xl) var(--spacing-xl);
}
</style>
