<template>
<div class="page">
  <h2 class="page-title"><slot name="title"></slot></h2>
  <div class="page-content"><slot></slot></div>
</div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
}
</style>
