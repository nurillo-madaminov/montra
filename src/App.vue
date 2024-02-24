<script setup>
import NavigationSidebar from '@/components/test/NavigationSidebar.vue'
</script>

<template>
  <Teleport to="body">
    <NavigationSidebar />
  </Teleport>
  <div class="h-screen">
    <RouterView></RouterView>
  </div>
</template>
