<template>
<router-link class="internal-link" :to="linkTo"><slot></slot></router-link>
</template>

<script setup>
import { computed } from 'vue'

const { routeName, params, query } = defineProps({
  routeName: { type: String, required: true },
  params: { type: Object, default: null },
  query: { type: Object, default: null }
})

const linkTo = computed(() => ({
  name: routeName,
  ...(params && { params }),
  ...(query && { query })
}))
</script>
