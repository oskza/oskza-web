<template>
<div class="projects-page">
  <h2 class="page-title">{{ $t('projectsPage.pageTitle') }}</h2>
  <div class="page-options">
    <GoBackBtn />
    <ToggleFiltersBtn v-model="filtersVisible" />
  </div>
  <div class="page-content">
    <Filters v-show="filtersVisible" />
    <List :projects="filteredProjects" />
  </div>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import ToggleFiltersBtn from './ToggleFiltersBtn.vue'
import Filters from './Filters.vue'
import List from '../../components/project/List.vue'
import GoBackBtn from '../../components/ui/GoBackBtn.vue'
import { projects as allProjects } from '../../data/projects'

const route = useRoute()

const filtersVisible = ref(false)

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

.page-options {
  display: flex;
  justify-content: space-between;
  padding: 0 min(var(--spacing-4xl), 10%);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-sm);
  color: var(--muted-text-color);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding: 0 min(var(--spacing-4xl), 10%) var(--spacing-xl);
}
</style>
