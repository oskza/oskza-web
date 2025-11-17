<template>
<AppBtn
  class="btn-toggle-filters" color="plain"
  :onClick="() => emit('update:isVisible', !isVisible)"
>
  <fa-icon class="icon" :icon="isVisible ? 'fas fa-xmark' : 'fas fa-sliders'" />
</AppBtn>
</template>

<script setup>
import AppBtn from '../../../components/ui/AppBtn.vue'

const { isVisible } = defineProps({ isVisible: { type: Boolean, required: true } })

const emit = defineEmits(['update:isVisible'])
</script>

<style scoped>
.btn-toggle-filters { color: inherit; }
</style>
