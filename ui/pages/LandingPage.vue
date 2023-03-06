

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, isAuthenticated } = useAuth0();

const login = () => {
  loginWithRedirect();
}

</script>

<template>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Welcome to the weather forecast web application. Please login with your Github user to
            use application and view the weather in your city.
          </p>
          <div class="mt-16">
            <button type="button" @click="login"
              class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
