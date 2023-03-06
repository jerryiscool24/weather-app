import {createApp} from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';

import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'


const pinia = createPinia()

import './assets/main.css'

const app = createApp(App)

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: window.location.origin + '/home'
    }
  })
);

app.use(Notifications)
app.use(pinia)
app.use(router)
app.mount("#app")
