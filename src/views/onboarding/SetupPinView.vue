<script setup>
import { reactive, ref } from 'vue'

const data = reactive({
  password: '',
  confirmPassword: ''
})

const password = ref('')
const passwordLength = 4

const handleSubmit = () => {
  if (password.value) {
    data.password = password.value
    password.value = ''
  }
}

const handleKeyboardInput = (i) => {
  if (password.value.length + 1 <= passwordLength) password.value += i
}
</script>
<template>
  <div class="flex h-full flex-col justify-between bg-violet-100">
    <div class="flex flex-col items-center py-[46px]">
      <h4 class="text-center text-title-3 text-light-80">
        {{ data.password ? 'Ok. Re type your PIN again.' : 'Let’s setup your PIN' }}
      </h4>

      <div class="mt-[92px]">
        <div class="flex gap-4">
          <div
            class="h-8 w-8 rounded-full border-4 border-[#EEE5FF]"
            v-for="i in passwordLength"
            :class="{ 'bg-light-40': i <= password.length }"
            :key="i"
          ></div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 grid-rows-4">
      <button
        v-for="n in 9"
        class="py-2.5 text-[48px] text-light-80 transition-colors active:bg-violet-80"
        :key="n"
        @click="handleKeyboardInput(n)"
      >
        <span>{{ n }}</span>
      </button>
      <button
        class="py-2.5 text-[48px] text-light-80 transition-colors active:bg-violet-80"
        @click="password = password.slice(0, password.length - 1)"
      >
        ⌫
      </button>
      <button
        class="py-2.5 text-[48px] text-light-80 transition-colors active:bg-violet-80"
        @click="handleKeyboardInput(0)"
      >
        <span>0</span>
      </button>
      <button
        class="flex justify-center py-2.5 transition-colors active:bg-violet-80"
        @click="handleSubmit"
      >
        <img src="@/assets/img/icons/arrowRight.svg" width="64" />
      </button>
    </div>
  </div>
</template>
