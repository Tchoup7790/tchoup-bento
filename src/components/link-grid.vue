<template>
  <div class="link-grid" v-if="props.links.length > 0">
    <link-card v-for="link in props.links" :key="link.id" :link="link" />
  </div>
</template>

<script lang="ts" setup>
import type { LinkData } from '@/models/interfaces/link-data.interface'
import linkCard from './link-card.vue'

const props = defineProps({
  links: {
    type: Array<LinkData>,
    required: true,
  },
})
</script>
