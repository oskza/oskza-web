<template>
<div class="page-options"><slot></slot></div>
</template>

<style scoped>
.page-options {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-sm);
  color: var(--muted-text-color);
}
</style>
