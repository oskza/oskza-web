<template>
<ul class="course-list">
  <li v-for="course in courses" :key="course.slug">
    <CourseTag :course />
  </li>
</ul>
</template>

<script setup>
import CourseTag from './CourseTag.vue'

const { courses } = defineProps({
  courses: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.course-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-xs);
}
</style>
