<template>
<div class="contact-page">
  <h2 class="page-title">{{ $t(`contactPage.pageTitle`) }}</h2>
  <div class="page-content">
    <ContactInfoList />
    <ContactForm />
  </div>
</div>
</template>

<script setup>
import ContactInfoList from './ContactInfoList.vue'
import ContactForm from './ContactForm.vue'
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
  gap: var(--spacing-xl);
  padding: 0 var(--spacing-sm) var(--spacing-xl);
}
</style>
