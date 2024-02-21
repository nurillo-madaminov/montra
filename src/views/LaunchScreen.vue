<script setup>
import router from '@/router'
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    router.replace('/welcome')
  }, 1500)
})
</script>
<template>
  <div
    class="bg-violet-100 h-screen grid place-items-center "
  >
    <h1 class="text-title-x text-light-100 relative z-10 font-[inter]">m<span class="relative before:content-[''] before:w-[74px] before:h-[74px] before:bg-[#e421fa] before:absolute before:-z-10 before:rounded-full before:blur-[32px]">o</span>ntra</h1>
  </div>
</template>
