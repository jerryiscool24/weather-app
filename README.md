
## About Weather App

Weather App is a web application for checking the current weather base on city using the following technology stack:

## Backend
- Laravel 10.0
- PHP 8.1
- Weather Api using (https://openweathermap.org/current#name)

## Frontend
- Vue 3 (Composition API)
- Authentication using (https://auth0.com/docs/quickstart/spa/vuejs/01-login)
- Vite
- Pinia
- Axios
- Vue 3 Notification (https://github.com/kyvg/vue3-notification)
- Tailwind CSS

## Out of the box Setup
- composer install
- php artisan vendor:publish --tag=weather-app::ui # publishes ui from ui/dist to /public


## Compiling and publishing UI assets

UI assets resides in the /ui directory.

- cd ui
- npm install
- npm run build
- cd ../public remove the following files and directories if they existed # assets, index.html
- cd .. # cd back to the root of the project
- php artisan vendor:publish --tag=weather-app::ui # publishes ui from ui/dist to /public

## ENV
- Backend OPEN_WEATHER_APPID (https://openweathermap.org/)
- Frontend VITE_AUTH0_DOMAIN, VITE_AUTH0_CLIENT_ID (https://manage.auth0.com/)
