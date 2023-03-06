

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useWeatherStore } from '../store/weather';
const router = useRouter()
const route = useRoute()
const weatherStore = useWeatherStore()

const data = weatherStore.data
const columns = [
  { name: 'Date (mm/dd/yyyy)', class: 'px-6 py-3 table-cell' },
  { name: 'Temp(F)', class: 'px-6 py-3 table-cell' },
  { name: 'Description', class: 'px-6 py-3 hidden sm:table-cell' },
  { name: 'Main', class: 'px-6 py-3 hidden sm:table-cell' },
  { name: 'Pressure', class: 'px-6 py-3 hidden sm:table-cell' },
  { name: 'Humidity', class: 'px-6 py-3 hidden sm:table-cell' },
]

const back = () => {
  router.push({
    name: 'home',
    query: {
      ...route.query
    }
  })
}

</script>

<template>
  <main>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th v-for="(column, index) in columns" :key="index" scope="col" :class="column.class">{{ column.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 table-cell">{{ data.date }}</td>
                <td class="px-6 py-4 table-cell">{{ data.temp }}</td>
                <td class="px-6 py-4 hidden sm:table-cell">{{ data.description }}</td>
                <td class="px-6 py-4 hidden sm:table-cell">{{ data.main }}</td>
                <td class="px-6 py-4 hidden sm:table-cell">{{ data.pressure }}</td>
                <td class="px-6 py-4 hidden sm:table-cell">{{ data.humidity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="button" @click.prevent="back"
          class="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-20 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Back
        </button>
      </div>
    </div>
  </main>
</template>
