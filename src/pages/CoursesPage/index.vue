<template>
<div class="courses-page">
  <h2 class="page-title">{{ $t(`coursesPage.pageTitle`) }}</h2>
  <div class="page-content">
    <p class="summary">{{ $t('coursesPage.summary') }}</p>
    <CourseList :courses />
    <div class="btns">
      <ContactCTABtn />
    </div>
    <LinkList />
  </div>
</div>
</template>

<script setup>
import CourseList from './CourseList.vue'
import LinkList from './LinkList.vue'
import ContactCTABtn from '../../components/ui/ContactCTABtn.vue'
import { courses } from '../../data/courses'
</script>

<style scoped>
.page-title {
  font-size: var(--font-4xl);
  line-height: 2.75rem;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
  padding: 0 min(var(--spacing-4xl), 10%) var(--spacing-xl);
}

.summary { color: var(--muted-text-color); }

@media (min-width: 768px) {
  .btns { margin-inline: auto; }
}
</style>
