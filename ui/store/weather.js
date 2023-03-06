import { defineStore } from 'pinia'
import { notify } from "@kyvg/vue3-notification";
import OpenWeatherService from '@/services/open-weather'
export const useWeatherStore = defineStore('weather-store', {
  state: () => ({
    isLoading : false,
    data: null,
  }),
  actions: {
    async fetchWeather(city) {
      try {
        this.isLoading = true
        const response = await OpenWeatherService.show(city)
        this.isLoading = false

        if(response.status === 200) {
          this.data = response.data.data
        }
      } catch (error) {
        this.isLoading = false
        this.data = null
        if(error.response.status === 400) {
          notify({
            title: 'City Not Found',
            text: 'Please enter valid city',
            type: 'error',
            duration: 5000,
          })
        }
      }
    }
  }
})
