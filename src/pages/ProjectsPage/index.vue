<template>
<Page class="projects-page">
  <template #options>
    <ToggleFiltersBtn v-model="filtersVisible" />
  </template>
  <template #title>{{ $t(`projectsPage.pageTitle`) }}</template>
  <Filters v-show="filtersVisible" />
  <List :projects="filteredProjects" />
</Page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Page from '../../components/page/Page.vue'
import ToggleFiltersBtn from './ToggleFiltersBtn.vue'
import Filters from './Filters.vue'
import List from '../../components/project/List.vue'
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
