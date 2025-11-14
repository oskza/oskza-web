<template>
<Page class="courses-page">
  <template #title>{{ $t(`coursesPage.pageTitle`) }}</template>
  <p class="summary">{{ $t('coursesPage.summary') }}</p>
  <CourseList :courses />
  <div class="btns">
    <ContactCTABtn />
  </div>
  <LinkList />
</Page>
</template>

<script setup>
import Page from '../../components/page/Page.vue'
import CourseList from './CourseList.vue'
import ContactCTABtn from '../../components/ui/ContactCTABtn.vue'
import LinkList from './LinkList.vue'
import { courses } from '../../data/courses'
</script>

<style scoped>
.summary { color: var(--muted-text-color); }

@media (min-width: 768px) {
  .btns { margin-inline: auto; }
}
</style>
