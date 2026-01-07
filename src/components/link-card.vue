<template>
  <a
    class="link-card"
    :href="props.link.url"
    target="_blank"
    :data-size="props.link.size"
    :data-mobile-size="props.link.mobileSize"
    :data-icon-type="props.link.iconType"
  >
    <div class="link-card-header">
      <div class="link-card-top">
        <img :src="`/apps/${props.link.iconType}.ico`" :alt="props.link.iconType" />
        <div class="link-card-text">
          <p>{{ props.link.title }}</p>
        </div>
      </div>
      <div
        v-if="props.link.size === 'RECTANGLE' || props.link.size === 'SQUARE'"
        class="link-card-host"
      >
        {{ props.link.host }}
      </div>
    </div>
    <div v-if="props.link.imageUrl && props.link.size === 'RECTANGLE'" class="link-card-image">
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
