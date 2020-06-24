import { createApp } from 'vue'
import App from './App.vue'
import './index.less'
import router from './router'
import store from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
