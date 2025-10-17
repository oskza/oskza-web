<template>
<AppBtn class="btn-go-back" color="plain" :onClick="goBack">
  <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left" />
  <span class="text">{{ $t('btns.back') }}</span>
</AppBtn>
</template>

<script setup>
import { useRouter } from 'vue-router'
import AppBtn from './AppBtn.vue'

const router = useRouter()
const goBack = () => router.back()
</script>

<style scoped>
.btn-go-back {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  color: inherit;
}

.icon { font-size: var(--font-2xs); }
</style>
