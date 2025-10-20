<template>
<div class="option">
  <label :for="id">{{ label }}</label>
  <select :id="id" v-model="model" @change="handleChange">
    <option value="">{{ $t('projectFilters.allOption') }}</option>
    <option v-for="(option, index) in options" :key="index" :value="option">
      {{ optionText(option) }}
    </option>
  </select>
</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: [String, Number],
  options: { type: Array, required: true },
  optionText: { type: Function, default: (option) => option }
})

const emit = defineEmits(['update:modelValue'])

const model = computed({ get: () => props.modelValue, set: val => emit('update:modelValue', val) })

const handleChange = e => emit('update:modelValue', e.target.value)
</script>

<style scoped>
.option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3xs);
  color: var(--primary-color);
}

label {
  font-family: var(--title-font-stack);
  font-size: var(--font-xs);
}

select {
  width: 100%;
  padding: var(--spacing-xs);
  font-size: var(--font-sm);
  background-color: var(--primary-color);
}
</style>
