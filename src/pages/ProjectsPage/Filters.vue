<template>
<div class="filters">
  <div class="options">
    <SelectFilter
      id="project-filters-type-option"
      :label="$t('projectFilters.labels.type')"
      :optionText="(option) => $t(`projectTypes.${option}`)"
      :options="typeOptions"
      v-model="selectedType"
      :onChange="updateQuery"
    />
    <SelectFilter
      id="project-filters-category-option"
      :label="$t('projectFilters.labels.category')"
      :optionText="(option) => $t(`projectCategories.${option}`)"
      :options="categoryOptions"
      v-model="selectedCategory"
      :onChange="updateQuery"
    />
    <SelectFilter
      id="project-filters-stack-option"
      :label="$t('projectFilters.labels.stack')"
      :options="techOptions"
      v-model="selectedTech"
      :onChange="updateQuery"
    />
  </div>
  <ClearFiltersBtn @clear="clearFilters" />
</div>
</template>

<script setup>
import { ref } from 'vue'
import SelectFilter from './SelectFilter.vue'
import ClearFiltersBtn from './ClearFiltersBtn.vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../../data/projects'

const router = useRouter()
const route = useRoute()

const unique = (arr) => [...new Set(arr)].filter(Boolean)

const typeOptions = unique(projects.map(p => p.type))
const categoryOptions = unique(projects.flatMap(p => p.categories))
const techOptions = unique(projects.flatMap(p => p.stack))

const selectedType = ref(route.query.type ?? '')
const selectedCategory = ref((route.query.category ?? ''))
const selectedTech = ref((route.query.tech ?? ''))

const updateQuery = () => {
  const query = {
    ...(selectedType.value && { type: selectedType.value }),
    ...(selectedCategory.value && { category: selectedCategory.value }),
    ...(selectedTech.value && { tech: selectedTech.value }),
  }
  router.replace({ name: 'projects', query })
}

const clearFilters = () => {
  selectedType.value = ''
  selectedCategory.value = ''
  selectedTech.value = ''
  router.replace({ name: 'projects', query: {} })
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.options {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md) var(--spacing-md);
  border: 1px solid var(--primary-color);
  border-radius: 3px;
}
</style>
