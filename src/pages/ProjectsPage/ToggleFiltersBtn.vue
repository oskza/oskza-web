<template>
<AppBtn class="btn-toggle-filters" color="plain"  :onClick="toggleFiltersVisibility">
  <font-awesome-icon class="icon" :icon="modelValue ? 'fas fa-xmark' : 'fas fa-sliders'" />
  <span class="text">{{ $t(`projectFilters.showFilters`) }}</span>
</AppBtn>
</template>

<script setup>
import AppBtn from '../../components/ui/AppBtn.vue'

const props = defineProps({ modelValue: { type: Boolean, required: true } })

const emit = defineEmits(['update:modelValue'])

const toggleFiltersVisibility = () => emit('update:modelValue', !props.modelValue)
</script>

<style scoped>
.btn-toggle-filters {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  color: inherit;
}
</style>
