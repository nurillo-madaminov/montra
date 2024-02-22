<script setup>
import TopNavigation from '../components/common/TopNavigation.vue'
import OTPInput from '@/components/common/form/OTPInput.vue'
</script>

<template>
  <div class="px-[20px]">
    <top-navigation title="Sign Up" :hasBackButton="false"></top-navigation>

    <OTPInput />
  </div>
</template>
