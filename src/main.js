import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faUser, faM, faBars, fas } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faUser, faM, faBars, fas)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
