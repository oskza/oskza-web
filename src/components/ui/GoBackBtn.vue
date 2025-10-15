<template>
<AppBtn class="btn-go-back" color="plain" :onClick="goBack">
  <font-awesome-icon icon="fa-solid fa-arrow-left" class="icon" />
  {{ $t('btns.back') }}
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
  gap: var(--spacing-2xs);
  font-weight: 400;
  color: var(--muted-text-color);
}

.icon { color: var(--text-color); }
</style>
