<script setup>
const props = defineProps(['title', 'type'])
</script>

<template>
  <div
    class="flex h-[56px] w-full items-center justify-center rounded-2xl text-title-3 font-bold"
    :class="{
      'bg-violet-100 text-light-80': props.type === 'primary',
      'bg-violet-20 text-violet-100': props.type !== 'primary'
    }"
  >
    {{ title }}
  </div>
</template>
