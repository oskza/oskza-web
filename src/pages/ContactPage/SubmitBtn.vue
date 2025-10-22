<template>
<AppBtn class="btn-submit" color="accent" pill>
  <font-awesome-icon icon="fa-solid fa-paper-plane" />
  {{ $t('contactForm.submit') }}
</AppBtn>
</template>

<script setup>
import AppBtn from '../../components/ui/AppBtn.vue'
</script>

<style scoped>
.btn-submit { padding: var(--spacing-sm) var(--spacing-3xl); }
</style>
