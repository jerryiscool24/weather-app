<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
const { user } = useAuth0();
</script>

<template>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="flex flex-col justify-items-center items-center">
          <p class="mt-6 text-lg leading-8 text-gray-600">{{ user.name }}</p>
          <a
            :href="`https://github.com/${user.nickname}`"
            class="text-blue-600 visited:text-purple-600 ..."
          >
          https://github.com/{{ user.nickname }}
          </a>
          <div class="mt-10">
            <form class="flex flex-col items-center">
              <label for="simple-search" class="sr-only">City</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="w-80 border border-gray-300 text-gray-400 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                  placeholder="City"
                  required
                />
              </div>
              <button
                type="button"
                @click="$router.push({ name: 'weather' })"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Display Weather
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
