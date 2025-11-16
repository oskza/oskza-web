<template>
<AppBtn class="btn-submit" color="accent" pill>
  <fa-icon class="icon" icon="fa-solid fa-paper-plane" />
  <span class="text">{{ $t('contactForm.submit') }}</span>
</AppBtn>
</template>

<script setup>
import AppBtn from '../../components/ui/AppBtn.vue'
</script>

<style scoped>
.btn-submit {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  padding: var(--spacing-sm) var(--spacing-2xl);
}
</style>
