<template>
<Page class="contact-page">
  <template #title>{{ $t("contactPage.pageTitle") }}</template>
  <div class="wrapper">
    <ContactInfoList />
    <ContactForm />
  </div>
</Page>
</template>

<script setup>
import Page from '../../components/page/Page.vue'
import ContactInfoList from './ContactInfoList.vue'
import ContactForm from './ContactForm.vue'
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  align-items: center;
  margin-inline: calc(-1 * var(--spacing-lg));
}
</style>
