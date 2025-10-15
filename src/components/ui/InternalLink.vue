<template>
<router-link
  class="internal-link"
  :to="linkTo">
  <slot></slot>
</router-link>
</template>

<script setup>
import { computed } from 'vue'

const { routeName, queryKey, queryValue } = defineProps({
  routeName: { type: String, required: true },
  queryKey: String,
  queryValue: String
})

const linkTo = computed(() => {
  return (queryKey && queryValue)
    ? { name: routeName, query: { [queryKey]: queryValue } }
    : { name: routeName };
})
</script>
