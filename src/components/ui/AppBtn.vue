<template>
<component
  class="btn"
  :class="{ 'btn-pill': pill }"
  :is="tag"
  :href="isLink ? url : null"
  :target="isLink && external ? '_blank' : null"
  @click="handleClick"
  :style="{
    '--btn-bg': bgColor,
    '--btn-text': textColor,
    '--btn-border': borderColor
  }">
  <slot></slot>
</component>
</template>

<script setup>
import { computed } from 'vue'

const { onClick, url, external, pill, outline, color } = defineProps({
  onClick: Function,
  url: String,
  external: Boolean,
  pill: Boolean,
  outline: Boolean,
  color: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'accent', 'plain'].includes(v)
  }
})

const colorMap = {
  primary: { bg: 'var(--primary-color)', text: 'var(--text-on-primary-color)' },
  accent: { bg: 'var(--accent-color)', text: 'var(--text-on-accent-color)' },
  plain: { bg: 'transparent', text: 'var(--text-color)' }
}

const handleClick = event => {
  if (!isLink.value && onClick)
    onClick(event)
}

const isLink = computed(() => !!url)

const tag = computed(() => isLink.value ? 'a' : 'button')

const bgColor = computed(() => outline ? 'transparent' : colorMap[color].bg)

const textColor = computed(() => {
  if (color === 'plain' && outline)
    return 'var(--text-color)'
  return outline
    ? colorMap[color].bg
    : colorMap[color].text;
})

const borderColor = computed(() => {
  return color === 'plain' && outline
          ? 'var(--text-color)'
          : colorMap[color].bg;
})
</script>

<style scoped>
.btn {
  font-size: inherit;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid var(--btn-border);
  background-color: var(--btn-bg);
  color: var(--btn-text);
  transition: 0.2s;
}

.btn:hover { opacity: 0.85; }

.btn-pill { border-radius: 999px; }

</style>
