<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'

const route = useRoute()

</script>

<template>
    <TheHeader />
    <RouterView :key="route.fullPath"/>
</template>
