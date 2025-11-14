<template>
<div class="page-options"><slot></slot></div>
</template>

<style scoped>
.page-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  font-size: var(--font-sm);
  color: var(--muted-text-color);
}
</style>
