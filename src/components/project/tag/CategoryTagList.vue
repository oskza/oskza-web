<template>
<BaseTagList class="category-tag-list">
  <li v-for="category in categories" :key="category">
    <CategoryTag :category />
  </li>
</BaseTagList>
</template>

<script setup>
import BaseTagList from './BaseTagList.vue'
import CategoryTag from './CategoryTag.vue'

const { categories } = defineProps({
  categories: { type: Array, required: true }
})
</script>
