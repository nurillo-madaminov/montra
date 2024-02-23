<script setup>
const props = defineProps(['title'])
</script>
<template>
  <div class="relative flex h-16 items-center justify-center">
    <img
      src="@/assets/img/icons/backButton.svg"
      alt=""
      @click="$router.go(-1)"
      class="absolute left-0 ml-0"
    />
    <h1 class="text-title-3 font-semibold">{{ props.title }}</h1>
  </div>
</template>
