<template>
<BaseTag class="tech-tag" :query="{ tech: tech }">
  {{ tech }}
</BaseTag>
</template>

<script setup>
import BaseTag from './BaseTag.vue'

const { tech } = defineProps({
  tech: { type: String, required: true }
})
</script>

<style scoped>
.tech-tag {
  border-radius: 999px;
  background: var(--tech-tag-bg-color);
  color: var(--tech-tag-text-color);
}
</style>
