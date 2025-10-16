<template>
<ul class="tag-list">
  <slot></slot>
</ul>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xs);
}
</style>
