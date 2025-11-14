<template>
<div class="page">
  <Options>
    <GoBackBtn />
    <slot name="options"></slot>
  </Options>
  <Title><slot name="title"></slot></Title>
  <div class="page-content"><slot></slot></div>
</div>
</template>

<script setup>
import Title from './Title.vue'
import Options from './Options.vue'
import GoBackBtn from '../ui/GoBackBtn.vue'
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}
</style>
