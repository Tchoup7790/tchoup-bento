<template>
  <a :href="props.link.url" target="_blank">
    <div>
      <img :src="`/apps/${props.link.iconType}.ico`" :alt="props.link.iconType" />
      <div>
        <p>{{ props.link.title }}</p>
        <p>{{ props.link.host }}</p>
      </div>
    </div>
    <div v-if="!props.link.imageUrl">
      <img :src="props.link.imageUrl" :alt="props.link.title" />
    </div>
  </a>
</template>

<script lang="ts" setup>
import type { LinkData } from '@/models/interfaces/link-data.interface'
import type { PropType } from 'vue'

const props = defineProps({
  link: {
    type: Object as PropType<LinkData>,
    required: true,
  },
})
</script>
