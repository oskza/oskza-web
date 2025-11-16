import { createApp } from 'vue'
import router from './router'

import './style.css'
import App from './App.vue'

import i18n from './i18n'
import { FontAwesomeIcon } from './fontawesome'

createApp(App)
  .use(router)
  .use(i18n)
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
