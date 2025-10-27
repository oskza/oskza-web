<template>
<div class="course-tag">
  {{ $t(`courses.${course.id}.name`) }}
</div>
</template>

<script setup>
const { course } = defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.course-tag {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--font-xs);
  font-weight: 600;
  background-color: var(--primary-color);
  border-radius: 3px;
}
</style>
