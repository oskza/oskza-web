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
  margin-bottom: var(--spacing-3xl);
}

.page-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-inline: calc(-1 * var(--spacing-xl));
}
</style>
