<script setup>
import { ref } from 'vue'

const password = ref('')

const passwordLength = 4
</script>
<template>
  <div class="bg-violet-100">
    <div>
      <h4 class="text-center text-title-3 text-light-80">Let’s setup your PIN</h4>

      <div class="mt-">
        <div class="flex">
          <div class="h-8 w-8" v-for="i in passwordLength" :key="i"></div>
        </div>
      </div>
    </div>
  </div>
</template>
