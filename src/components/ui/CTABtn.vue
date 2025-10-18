<template>
<AppBtn class="cta-btn" v-bind="filteredProps" pill>
  <font-awesome-icon v-if="icon" class="icon" :icon="icon" />
  <span class="text"><slot></slot></span>
</AppBtn>
</template>

<script setup>
import { computed } from 'vue'
import AppBtn from './AppBtn.vue'

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-stack-mono);
  font-weight: 700;
}

.cta-btn.btn-outline { color: var(--header-text-color); }

html.light .btn-outline,
html.light .btn-outline .icon {
  border-color: var(--muted-text-on-primary-color);
}

.icon {
  position: absolute;
  left: var(--spacing-xl);
  padding-right: var(--spacing-sm);
  border-right: 1.5px solid var(--border-color);
}
</style>
