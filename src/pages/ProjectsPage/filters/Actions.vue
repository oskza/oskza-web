<template>
  <div class="filter-actions">
    <ClearBtn
      v-show="isVisible"
      @clear="clearFilters"
    />
    <ToggleBtn
      :isVisible
      @update:isVisible="emit('update:isVisible', $event)"
    />
  </div>
</template>

<script setup>
import ToggleBtn from './ToggleBtn.vue'
import ClearBtn from './ClearBtn.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  isVisible: Boolean
})

const emit = defineEmits(['update:isVisible'])

const clearFilters = () => router.replace({ name: 'projects', query: {} })
</script>

<style scoped>
.filter-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-xs);
  color: var(--muted-text-color);
  margin-inline-end: var(--spacing-3xs);
  margin-block-end: var(--spacing-xs);
}
</style>
