import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import api from './mixins/api'

const app = createApp(App)
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

app.use(store)
app.use(router)
app.mixin(api)

app.mount('#app')
