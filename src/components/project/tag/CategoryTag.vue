<template>
<BaseTag class="category-tag" queryKey="category" :queryValue="category">
  {{ $t(`projectCategories.${ category }`) }}
</BaseTag>
</template>

<script setup>
import BaseTag from './BaseTag.vue'

const { category } = defineProps({
  category: { type: String, required: true }
})
</script>

<style scoped>
.category-tag {
  border-radius: 3px;
  background-color: var(--primary-color);
  color: var(--text-on-primary-color);
}
</style>
