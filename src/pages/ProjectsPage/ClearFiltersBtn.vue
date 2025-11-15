<template>
<AppBtn
  class="btn-clear-filters"
  :onClick="() => $emit('clear', true)"
  color="primary"
  outline
  pill
>
  {{ $t('projectFilters.clearFilters') }}
</AppBtn>
</template>

<script setup>
import AppBtn from '../../components/ui/AppBtn.vue'

const emit = defineEmits(['clear'])
</script>

<style scoped>
.btn-clear-filters {
  padding: var(--spacing-xs) var(--spacing-lg);
  margin-inline: auto;
  font-size: var(--font-xs);
}
</style>
