<template>
  <div class="filters">
    <Actions
      :isVisible
      @update:isVisible="isVisible = $event"
    />
    <FilterSelects
      v-show="isVisible"
      :selected="selected"
      :options="options"
      @change="emit('updateFilters', $event)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Actions from './Actions.vue'
import FilterSelects from './FilterSelects.vue'

const { selected, options } = defineProps({
  selected: Object,
  options: Object
})

const emit = defineEmits(['updateFilters'])

const isVisible = ref(false)
</script>
