<template>
<ul class="cta-btn-list">
  <li><ContactCTABtn /></li>
  <li><CoursesCTABtn /></li>
  <li><ProjectsCTABtn /></li>
</ul>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactCTABtn from '../../components/ui/ContactCTABtn.vue'
import CoursesCTABtn from './CoursesCTABtn.vue'
import ProjectsCTABtn from './ProjectsCTABtn.vue'

const { locale } = useI18n()

const resumeUrl = computed(() => `/resume_${locale.value}.pdf`)
</script>

<style scoped>
.cta-btn-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
</style>
