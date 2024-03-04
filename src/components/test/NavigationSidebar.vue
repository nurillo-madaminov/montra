<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const routes = router.options.routes
const isOpen = ref(false)

const changeRoute = (to) => {
  router.push(to)
  isOpen.value = false
}
</script>

<template>
  <div class="fixed left-0 top-10 flex items-start">
    <Transition name="slide__right">
      <div class="flex flex-col" v-if="isOpen">
        <button
          class="bg-violet-40 px-3 py-4 transition-colors hover:bg-violet-60"
          :key="route.name"
          @click="changeRoute(route)"
          v-for="route in routes"
        >
          {{ route.component.__name }}
        </button>
      </div>
    </Transition>

    <button
      :key="isOpen"
      class="bg-violet-20 p-3 opacity-10 transition-all hover:opacity-100"
      @click="isOpen = !isOpen"
    >
      ☰
    </button>
  </div>
</template>

<style>
.slide__right-enter-active,
.slide__right-leave-active {
  @apply transition duration-300;
}

.slide__right-enter-from,
.slide__right-leave-to {
  @apply -translate-x-full scale-95 opacity-0;
}
</style>
