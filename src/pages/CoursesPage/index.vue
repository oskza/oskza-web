<template>
<div class="courses-page">
  <h2 class="page-title">{{ $t(`coursesPage.pageTitle`) }}</h2>
  <div class="page-content">
    <p class="summary">{{ $t('coursesPage.summary') }}</p>
    <CourseList :courses />
    <CTABtn color="accent" url="/contact" icon="fa-solid fa-envelope">
      {{ $t('ctaBtns.contact') }}
    </CTABtn>
    <LinkList />
  </div>
</div>
</template>

<script setup>
import CourseList from './CourseList.vue'
import LinkList from './LinkList.vue'
import CTABtn from '../../components/ui/CTABtn.vue'
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
  padding: 0 var(--spacing-xl) var(--spacing-xl);
}

.summary { color: var(--muted-text-color); }
</style>
