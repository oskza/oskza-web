<template>
<AppBtn
  class="btn-clear-filters" color="plain"
  :onClick="() => $emit('clear', true)"
>
  <fa-icon class="icon" icon="fas fa-trash-can" />
</AppBtn>
</template>

<script setup>
import AppBtn from '../../../components/ui/AppBtn.vue'

const emit = defineEmits(['clear'])
</script>

<style scoped>
.btn-clear-filters { color: inherit; }
</style>
