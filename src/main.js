import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import api from './mixins/api'

const app = createApp(App)

app.use(router)
app.mixin(api)

app.mount('#app')
