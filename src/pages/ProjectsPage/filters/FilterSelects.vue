<template>
<div class="filter-selects">
  <FilterSelect
    v-model="local.type"
    :options="options.types"
    :optionText="opt => $t(`projectTypes.${opt}`)"
    :label="$t('projectFilters.labels.type')"
    @update:modelValue="changed('type', $event)"
  />
  <FilterSelect
    v-model="local.category"
    :options="options.categories"
    :optionText="opt => $t(`projectCategories.${opt}`)"
    :label="$t('projectFilters.labels.category')"
    @update:modelValue="changed('category', $event)"
  />
  <FilterSelect
    v-model="local.tech"
    :options="options.tech"
    :label="$t('projectFilters.labels.stack')"
    @update:modelValue="changed('tech', $event)"
  />
</div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import FilterSelect from './FilterSelect.vue'

const { options, selected } = defineProps({
  options: Object,
  selected: Object
})

const emit = defineEmits(['change'])

const local = reactive({ ...selected })

watch(
  () => selected,
  val => Object.assign(local, val),
  { deep: true }
)

const changed = (key, value) => {
  local[key] = value
  emit('change', { ...local })
}
</script>

<style scoped>
.filter-selects {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg) var(--spacing-lg);
  margin-block-end: var(--spacing-lg);
  border: 1px solid var(--primary-color);
  border-radius: 3px;
}

html.light .filter-selects {
  border: none;
  box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
}
</style>
