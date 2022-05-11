import { createApp } from 'vue'
import App from './App.vue'
import StateAPIService from '@/services/stateService'

import router from '@/router'  // will be importing index.js 

import 'leaflet/dist/leaflet.css' // importing the map 

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)  //using the router
app.mount('#app')