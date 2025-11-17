<template>
<div class="filter-select">
  <label>
    {{ label }}
    <select v-model="model">
      <option value="">{{ $t('projectFilters.allOption') }}</option>
      <option v-for="opt in options" :key="opt" :value="opt">
        {{ optionText(opt) }}
      </option>
    </select>
  </label>
</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array, required: true },
  optionText: { type: Function, default: opt => opt },
  modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2xs);
  font-family: var(--font-stack-mono);
  font-size: var(--font-2xs);
  color: var(--muted-text-color);
}

select {
  width: 100%;
  padding: var(--spacing-xs);
  font-size: var(--font-sm);
  background-color: var(--primary-color);
  border-radius: 3px;
}

html.light select {
  background-color: inherit;
  color: var(--text-color);
}
</style>
