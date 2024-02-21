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
    class="bg-violet-100 h-screen grid place-items-center before:content-[''] before:w-[74px] before:h-[74px] before:bg-[#e421fa] before:absolute before:left-28 before:rounded-full before:blur-[32px]"
  >
    <h1 class="text-title-x text-light-100 relative z-10 font-[inter]">montra</h1>
  </div>
</template>
