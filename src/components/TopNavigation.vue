<script setup>
const props = defineProps(['title', 'hasBackButton'])
</script>
<template>
    <div class="h-16 flex items-center justify-center bg-light-40">
        <img v-show="props.hasBackButton" src="../assets/img/icons/backButton.svg" alt="" @click="$router.go(-1)" class="ml-0">
        <h1 class="text-title-3 font-semibold">{{ props.title }} {{ props.hasBackButton }}</h1>
    </div>
</template>
