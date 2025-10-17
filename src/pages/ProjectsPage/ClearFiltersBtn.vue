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
  margin: 0 auto;
  padding: .5rem 1.25rem;
  font-size: .75rem;
}
</style>
