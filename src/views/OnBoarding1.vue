<script setup>
import LargeButton from '@/components/LargeButton.vue'
import { onMounted, ref } from 'vue'
const slider = ref(null)
const pageTitle = ref('Gain total control of your money')
const pageText = ref('Become your own money manager and make every cent count')

onMounted(() => {
  slider.value.onscroll = function () {
    if (slider.value.scrollLeft >= 312 && slider.value.scrollLeft <= 623) {
      pageTitle.value = 'Know where your money goes'
      pageText.value = 'Track your transaction easily, with categories and financial report'
    
    } 
    else if (slider.value.scrollLeft >= 624) {
      pageTitle.value = 'Planning ahead'
      pageText.value = 'Setup your budget for each category so you in control'
    } 
    else {
      pageTitle.value = 'Gain total control of your money'
      pageText.value = 'Become your own money manager and make every cent count'
    }
  }
})
</script>
<template>
  <div class="h-screen px-[20px] flex flex-col items-center justify-evenly">
    <div
      class="slider flex items-center overflow-x-scroll w-[312px] h-[312px] snap-x snap-mandatory scroll-smooth"
      ref="slider"
    >
      <img
        src="../assets/img/Illustration-1.png"
        alt=""
        class="shrink-0 w-full snap-start"
        draggable="false"
      />
      <img
        src="../assets/img/Illustration-2.png"
        alt=""
        class="shrink-0 w-full snap-start"
        draggable="false"
      />
      <img
        src="../assets/img/Illustration-3.png"
        alt=""
        class="shrink-0 w-full snap-start"
        draggable="false"
      />
    </div>
    <div class="space-y-4">
      <h1 class="text-title-1 font-bold text-center">{{ pageTitle }}</h1>
      <p class="text-regular-1 text-light-20 text-center">
        {{ pageText }}
      </p>
    </div>
    <div class="flex gap-4 items-center">
      <div class="w-4 h-4 bg-violet-100 rounded-full"></div>
      <div class="w-2 h-2 bg-light-20 rounded-full"></div>
      <div class="w-2 h-2 bg-light-20 rounded-full"></div>
    </div>
    <div class="w-full space-y-4">
      <large-button title="Sign Up" type="primary" @click="$router.push('/sign-up')"></large-button>
      <large-button title="Log in" type="secondary"></large-button>
    </div>
  </div>
</template>

<style>
.slider {
  scrollbar-width: none;
}
</style>
