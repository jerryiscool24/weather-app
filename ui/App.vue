<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheNotification from './components/TheNotification.vue';

const route = useRoute()

</script>

<template>
    <TheNotification />
    <TheHeader />
    <RouterView :key="route.fullPath"/>
</template>
