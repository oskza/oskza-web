<template>
<Page class="projects-page">
  <template #title>{{ $t('projectsPage.pageTitle') }}</template>
  <div class="wrapper">
    <Filters
      :selected="selectedFilters"
      :options="filterOptions"
      @updateFilters="updateQuery"
    />
    <List :projects="filteredProjects" />
  </div>
</Page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Page from '../../components/page/Page.vue'
import Filters from './filters/Filters.vue'
import List from '../../components/project/List.vue'
import { projects as allProjects } from '../../data/projects'

const route = useRoute()
const router = useRouter()

const selectedFilters = computed(() => ({
  type: route.query.type ?? '',
  category: route.query.category ?? '',
  tech: route.query.tech ?? ''
}))

const unique = arr => [...new Set(arr)].filter(Boolean)

const filterOptions = computed(() => {
  const { type, category, tech } = selectedFilters.value

  const byType = allProjects.filter(p => !type || p.type === type)
  const byCategory = allProjects.filter(p => !category || p.categories.includes(category))
  const byTech = allProjects.filter(p => !tech || p.stack.includes(tech))

  return {
    types: unique(byCategory.filter(p => byTech.includes(p)).map(p => p.type)),
    categories: unique(byType.filter(p => byTech.includes(p)).flatMap(p => p.categories)),
    tech: unique(byType.filter(p => byCategory.includes(p)).flatMap(p => p.stack))
  }
})

const filteredProjects = computed(() => {
  const { type, category, tech } = selectedFilters.value

  return allProjects.filter(project => {
    if (type && project.type !== type) return false
    if (category && !project.categories.includes(category)) return false
    if (tech && !project.stack.includes(tech)) return false
    return true
  })
})

const updateQuery = filters => {
  router.replace({
    name: 'projects',
    query: {
      type: filters.type || undefined,
      category: filters.category || undefined,
      tech: filters.tech || undefined
    }
  })
}
</script>
