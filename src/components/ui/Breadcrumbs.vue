<template>
<ul class="breadcrumbs">
  <li v-for="(item, i) in renderedItems" :key="i">
    <router-link v-if="item.to" :to="item.to">
      <font-awesome-icon v-if="item.isHome" class="icon" icon="fa-solid fa-house" />
      <span v-else>{{ item.label }}</span>
    </router-link>
    <span v-else class="current">{{ item.label }}</span>
  </li>
</ul>
</template>

<script setup>
import { computed } from 'vue'

const { items } = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const renderedItems = computed(() =>
  items.map(item => {
    return (item.label === 'home')
      ? { ...item, isHome: true, label: '' }
      : { ...item, isHome: false };
  })
)
</script>

<style scoped>
ul {
  display: flex;
  font-family: var(--font-stack-mono);
  font-size: var(--font-xs);
}

li:not(:last-child)::after {
  content: "|";
  margin-inline: var(--spacing-2xs);
  color: var(--border-color);
  opacity: .65;
}
</style>
