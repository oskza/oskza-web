import { createApp } from 'vue'
import router from './router'

import './style.css'
import App from './App.vue'

import { FontAwesomeIcon } from './fontawesome'

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
