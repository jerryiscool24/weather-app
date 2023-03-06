<script setup>
import { CloudIcon } from '@heroicons/vue/20/solid'
import { useAuth0 } from '@auth0/auth0-vue';
const { logout, isAuthenticated } = useAuth0();
const origin = window.location.origin
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <router-link to="/" class="flex items-center">
          <CloudIcon class="h-10 w-10 mr-2 text-blue-500" />
          <span class="invisible md:visible self-center text-xl font-semibold whitespace-nowrap dark:text-white">Weather
            Forecast</span>
        </router-link>

        <div v-if="isAuthenticated" class="flex items-center lg:order-2">
          <a href="#" @click.prevent="logout({ logoutParams: { returnTo: origin } })"
            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Logout</a>
        </div>
      </div>
    </nav>
  </header>
</template>
