<template>
  <div class="profile-section">
    <div>
      <img :src="`/${props.avatarUrl}/head.png`" :alt="props.name" />
    </div>
    <h1>{{ props.name }}</h1>
  </div>
</template>

<script lang="ts" setup>
// props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
})
</script>
