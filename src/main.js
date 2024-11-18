import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createSearchStore } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'

import {
  faCircle,
  faArrowRight,
  faSignOutAlt,
  faArrowLeft,
  faArrowUp,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUser,
  faCircle,
  faArrowRight,
  faEyeSlash,
  faSignOutAlt,
  faEye,
  faArrowLeft,
  faArrowUp,
  faSearch,
)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

const searchStore = createSearchStore()
app.provide('searchStore', searchStore)

app.use(router)

app.mount('#app')
