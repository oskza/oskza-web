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
import { ref, computed, watch } from 'vue'
import SelectFilter from './SelectFilter.vue'
import ClearFiltersBtn from './ClearFiltersBtn.vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../../data/projects'

const router = useRouter()
const route = useRoute()

const unique = (arr) => [...new Set(arr)].filter(Boolean)

const selectedType = ref(route.query.type ?? '')
const selectedCategory = ref((route.query.category ?? ''))
const selectedTech = ref((route.query.tech ?? ''))

const typeOptions = computed(() => {
  const filtered = projects.filter(p => {
    const matchCategory = !selectedCategory.value || p.categories?.includes(selectedCategory.value)
    const matchTech = !selectedTech.value || p.stack?.includes(selectedTech.value)
    return matchCategory && matchTech
  })
  return unique(filtered.map(p => p.type))
})

const categoryOptions = computed(() => {
  const filtered = projects.filter(p => {
    const matchType = !selectedType.value || p.type === selectedType.value
    const matchTech = !selectedTech.value || p.stack?.includes(selectedTech.value)
    return matchType && matchTech
  })
  return unique(filtered.flatMap(p => p.categories))
})

const techOptions = computed(() => {
  const filtered = projects.filter(p => {
    const matchType = !selectedType.value || p.type === selectedType.value
    const matchCategory = !selectedCategory.value || p.categories?.includes(selectedCategory.value)
    return matchType && matchCategory
  })
  return unique(filtered.flatMap(p => p.stack))
})

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

watch(
  () => route.query, query => {
    selectedType.value = query.type ?? ''
    selectedCategory.value = query.category ?? ''
    selectedTech.value = query.tech ?? ''
  },
  { immediate: true }
)
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
