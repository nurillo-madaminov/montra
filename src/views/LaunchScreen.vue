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
  <div class="grid h-screen place-items-center bg-violet-100">
    <h1 class="relative z-10 font-[inter] text-title-x text-light-100">
      m<span
        class="relative before:absolute before:-z-10 before:h-[74px] before:w-[74px] before:rounded-full before:bg-[#e421fa] before:blur-[32px] before:content-['']"
        >o</span
      >ntra
    </h1>
  </div>
</template>
