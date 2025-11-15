<template>
<AppBtn class="cta-btn" v-bind="filteredProps" pill>
  <font-awesome-icon v-if="icon" class="icon" :icon="icon" />
  <span class="text"><slot></slot></span>
</AppBtn>
</template>

<script setup>
import { computed } from 'vue'
import AppBtn from '../../components/ui/AppBtn.vue'

const props = defineProps({
  color: String,
  icon: [ Array, String ],
  onClick: Function,
  url: String,
  external: Boolean,
  outline: Boolean
})

const filteredProps = computed(() => {
  const { icon, ...rest } = props
  return rest
})
</script>

<style scoped>
.cta-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-3xl);
  font-family: var(--font-stack-mono);
  font-weight: 800;
}

.btn-outline { color: var(--header-text-color); }

.btn-primary:not(.btn-outline) {
  background-color: var(--primary-color-dark);
  border-color: var(--primary-color-dark);
}

.btn-primary:not(.btn-outline) .icon { border-color: var(--bg-color); }

html.light .btn-accent .icon,
html.light .btn-outline,
html.light .btn-outline .icon,
html.light .btn-primary .icon {
  border-color: var(--muted-text-on-primary-color);
}

html.light .btn-outline {
  background-color: var(--primary-color-light);
  border-color: var(--primary-color-light);
}
</style>
