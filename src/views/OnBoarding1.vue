<script setup>
import MButton from '@/components/common/MButton.vue'
import { computed, ref, watch } from 'vue'

const index = ref(0)
const slider = ref(null)
const slideWidth = 312

const boardText = computed(() => {
  var title = ''
  var description = ''
  switch (index.value) {
    case 0:
      title = 'Gain total control of your money'
      description = 'Become your own money manager and make every cent count'
      break

    case 1:
      title = 'Know where your money goes'
      description = 'Track your transaction easily, with categories financial report'
      break

    case 2:
      title = 'Planning ahead'
      description = 'Setup your budget for each category so you in control'
  }
  return { title, description }
})

function handleBoardScroll(event) {
  index.value = event.target.scrollLeft / slideWidth
}

watch(index, () => {
  slideTo()
})

const slideTo = () => {
  slider.value.scrollLeft = slideWidth * index.value
}
</script>
<template>
  <div class="flex h-screen flex-col items-center justify-evenly px-default">
    <div
      class="no-scrollbar flex h-[312px] w-[312px] snap-x snap-mandatory items-center overflow-x-scroll scroll-smooth"
      @scrollend="handleBoardScroll"
      ref="slider"
    >
      <img
        src="../assets/img/Illustration-1.png"
        alt=""
        class="w-full shrink-0 snap-start"
        draggable="false"
      />
      <img
        src="../assets/img/Illustration-2.png"
        alt=""
        class="w-full shrink-0 snap-start"
        draggable="false"
      />
      <img
        src="../assets/img/Illustration-3.png"
        alt=""
        class="w-full shrink-0 snap-start"
        draggable="false"
      />
    </div>

    <Transition name="fade" mode="out-in">
      <div :key="index" class="space-y-4">
        <h1 class="text-center text-title-1 font-bold">{{ boardText.title }}</h1>
        <p class="text-center text-regular-1 text-light-20">
          {{ boardText.description }}
        </p>
      </div>
    </Transition>

    <div class="flex items-center gap-4">
      <div
        class="h-2 w-2 rounded-full transition-all duration-300"
        v-for="i in 3"
        @click="index = i - 1"
        :key="i"
        :class="index === i - 1 ? 'h-4 w-4 bg-violet-100' : 'bg-light-20'"
      ></div>
    </div>
    <div class="w-full space-y-4">
      <MButton title="Sign Up" type="primary" @click="$router.push('/sign-up')"></MButton>
      <MButton title="Log in" type="secondary"></MButton>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition duration-300;
}

.fade-enter-from,
.fade-leave-to {
  @apply translate-y-2 scale-95 opacity-0;
}
</style>
