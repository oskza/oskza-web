<template>
<BaseTagList class="tech-tag-list">
  <li v-for="tech in stack" :key="tech">
    <TechTag :tech />
  </li>
</BaseTagList>
</template>

<script setup>
import BaseTagList from './BaseTagList.vue'
import TechTag from './TechTag.vue'

const { stack } = defineProps({
  stack: { type: Array, required: true }
})
</script>
